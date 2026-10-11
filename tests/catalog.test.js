import {test} from 'node:test';
import assert from 'node:assert/strict';
import {products,categories,filterProducts} from '../src/data.js';
test('each product has a unique routable identifier and valid category',()=>{assert.equal(new Set(products.map(p=>p.id)).size,products.length);for(const p of products){assert.match(p.id,/^[a-z0-9-]+$/);assert.ok(categories.some(c=>c.id===p.category));assert.ok(p.image);}});
test('category and search filters combine',()=>{assert.equal(filterProducts('','organic').length,2);assert.equal(filterProducts('۰۱','organic').length,1);assert.equal(filterProducts('زیستی','chemical').length,0);assert.equal(filterProducts('ناموجود').length,0);});
test('Arabic letter variants work in Persian search',()=>{assert.deepEqual(filterProducts('شيميايي'),filterProducts('شیمیایی'));});
