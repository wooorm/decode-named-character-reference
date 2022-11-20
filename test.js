import assert from 'node:assert/strict'
import test from 'node:test'
import {decodeNamedCharacterReference} from './index.js'

test('decodeNamedCharacterReference(value)', function () {
  assert.equal(decodeNamedCharacterReference('amp'), '&', 'works')
  assert.equal(decodeNamedCharacterReference('asdasdasd'), false, 'works')
})
