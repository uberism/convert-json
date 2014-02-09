var should = require('should')
var cv2json = require('../')
var fs = require('fs')

describe('should convert different format to json', function() {
	it('should convert xls to json', function() {
		cv2json({
			input : './sample/sample.xls',
			output: null
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})
	it('should convert xlsx to json', function() {
		cv2json({
			input : './sample/sample.xlsx',
			output: null
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})
	it('should convert xml to json', function() {
		cv2json({
			input : './sample/sample.xml',
			output: null
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})
	it('should convert csv to json', function() {
		cv2json({
			input : './sample/sample.csv',
			output: null
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})

})

describe('should save json to file', function() {

	it('should convert xls to json', function() {
		cv2json({
			input : './sample/sample.xls',
			output: './sample/test_xls.json' 
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})

	
	it('should convert csv to json', function() {
		cv2json({
			input : './sample/sample.csv',
			output: './sample/test_csv.json'
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})

	
	it('should convert xlsx to json', function() {
		cv2json({
			input : './sample/sample.xlsx',
			output: './sample/test_xlsx.json'
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})

	it('should convert xml to json', function() {
		cv2json({
			input : './sample/sample.xml',
			output: './sample/test_xml.json'
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})
})

describe('check if the test json file is exist', function() {

	it('test_xlsx.json should exist', function() {
		var exist = fs.existsSync('./sample/test_xlsx.json');
		exist.should.be.true;
	})

	it('test_xls.json should exist', function() {
		var exist = fs.existsSync('./sample/test_xls.json');
		exist.should.be.true;
	})
	
	it('test_xml.json should exist', function() {
		var exist = fs.existsSync('./sample/test_xml.json');
		exist.should.be.true;
	})

	it('test_csv.json should exist', function() {
		var exist = fs.existsSync('./sample/test_csv.json');
		exist.should.be.true;
	})
})
