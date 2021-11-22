import test from 'tape'
import {decodeNamedCharacterReference} from './index.js'

test('decodeNamedCharacterReference(value)', function (t) {
  t.equal(decodeNamedCharacterReference('amp'), '&', 'works')
  t.equal(decodeNamedCharacterReference('asdasdasd'), false, 'works')

  t.end()
})
