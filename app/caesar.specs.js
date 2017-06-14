var caesarCodeClass = require('./caesar-code');
const CaesarCode = new caesarCodeClass();

var expect = require('chai').expect;

describe('BestMusicFinder', function () {
    describe('#getOffsetByString', function () {
        it('should throw error on non-string key', function () {
            expect(function () {
                CaesarCode.getOffsetByString(123);
            }).to.throw('Wrong key type error');
        });
        
        it('should get the offset by an input string(the key of the offset)', function () {
            expect(CaesarCode.getOffsetByString('APPLE')).to.be.eql((65 + 80 + 80 + 76 + 69) % 26);
        });
        
        it('should never give 0 as offset', function () {
            expect(CaesarCode.getOffsetByString('NNNNNN')).to.be.eql(1);
        });
    });
    
    describe('#encode', function () {
        it('should return empty string on empty input', function () {
            expect(CaesarCode.encode('', 0)).to.be.eql('');
        });

        it('should return original text with zero offset', function () {
            expect(CaesarCode.encode('ABCD', 0)).to.be.eql('ABCD');
        });
       
        it('should handle negative offset', function () {
            expect(CaesarCode.encode('ABCD', -1)).to.be.eql('ZABC');
        });
       
        it('should handle offset greater than length of the abc', function () {
            expect(CaesarCode.encode('ABCD', 27)).to.be.eql('BCDE');
        });

        it('should encode uppercase input string', function () {
            expect(CaesarCode.encode('ABCD', 1)).to.be.eql('BCDE');
        });

        it('should encode lowercase input string', function () {
            expect(CaesarCode.encode('abcd', 1)).to.be.eql('bcde');
        });
        
        it('should go round through abc with uppercase input string', function () {
            expect(CaesarCode.encode('XYZ', 1)).to.be.eql('YZA');
        });
        
        it('should go round through abc with lowercase input string', function () {
            expect(CaesarCode.encode('xyz', 1)).to.be.eql('yza');
        });
        
        it('should leave non-english letters intact', function () {
            expect(CaesarCode.encode('áéíóöőúüűÁÉÍÓÖŐÚÜŰ', 1)).to.be.eql('áéíóöőúüűÁÉÍÓÖŐÚÜŰ');
        });
    });

    describe('#decode', function () {
        it('should return empty string on empty input', function () {
            expect(CaesarCode.decode('', 0)).to.be.eql('');
        });

         it('should return original text with zero offset', function () {
            expect(CaesarCode.decode('ABCD', 0)).to.be.eql('ABCD');
        });
       
        it('should handle negative offset', function () {
            expect(CaesarCode.decode('ZABC', -1)).to.be.eql('ABCD');
        });
       
        it('should handle offset greater than length of the abc', function () {
            expect(CaesarCode.decode('BCDE', 27)).to.be.eql('ABCD');
        });

        it('should encode uppercase input string', function () {
            expect(CaesarCode.decode('BCDE', 1)).to.be.eql('ABCD');
        });

        it('should encode lowercase input string', function () {
            expect(CaesarCode.decode('bcde', 1)).to.be.eql('abcd');
        });
        
        it('should go round through abc with uppercase input string', function () {
            expect(CaesarCode.decode('YZA', 1)).to.be.eql('XYZ');
        });
        
        it('should go round through abc with lowercase input string', function () {
            expect(CaesarCode.decode('yza', 1)).to.be.eql('xyz');
        });
        
        it('should leave non-english letters intact', function () {
            expect(CaesarCode.decode('áéíóöőúüűÁÉÍÓÖŐÚÜŰ', 1)).to.be.eql('áéíóöőúüűÁÉÍÓÖŐÚÜŰ');
        });
    });
});