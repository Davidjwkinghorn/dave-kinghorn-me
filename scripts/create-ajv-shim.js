#!/usr/bin/env node
/**
 * Postinstall script: Create ajv compatibility shim
 * 
 * Provides minimal `codegen` API expected by ajv-keywords when using
 * older ajv@6.12.6 with newer packages expecting ajv@8+.
 * This is a lightweight workaround for dependency conflicts during development.
 */

const fs = require('fs');
const path = require('path');

const shimPath = path.join(
  __dirname,
  '../node_modules/ajv/dist/compile/codegen.js'
);

const shimCode = `// Compatibility shim: provide minimal 'codegen' API expected by ajv-keywords
// This is a lightweight shim to allow older/newer mixed ajv/ajv-keywords
// combinations to run during development. It implements a simple tagged
// template function '_' that concatenates template strings and expressions.

function _template(strs, ...exprs) {
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    result += strs[i];
    if (i < exprs.length) {
      try {
        result += String(exprs[i]);
      } catch (e) {
        result += "";
      }
    }
  }
  return result;
}

module.exports._ = _template;
module.exports.default = { _: _template };
`;

try {
  // Create directory if it doesn't exist
  const dir = path.dirname(shimPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Only write if it doesn't exist or if content differs
  if (!fs.existsSync(shimPath) || fs.readFileSync(shimPath, 'utf8') !== shimCode) {
    fs.writeFileSync(shimPath, shimCode, 'utf8');
    console.log('✓ Created ajv compatibility shim at node_modules/ajv/dist/compile/codegen.js');
  }
} catch (err) {
  // Silently fail if we can't create the shim - it may already exist or be read-only
  if (process.env.DEBUG) {
    console.warn('Warning: Could not create ajv shim:', err.message);
  }
}
