/* Script to convert CSV File to JSON */

const file_system = require('fs')

const json_file_path = 'customer-data.json'
const csv_file_path = 'customer-data.csv'

/* Check input file size */

const input_file_stats = file_system.statSync(csv_file_path)
const iFileSizeInBytes = input_file_stats.size

if( iFileSizeInBytes < 5 ){
	console.log('CSV input is empty.Please check.')
	return false
}

/* Check output file size */

const output_file_stats = file_system.statSync(json_file_path)
const oFileSizeInBytes = output_file_stats.size

if( oFileSizeInBytes > 1 ){
	console.log('JSON output is already generated.')
	return false
}

/* Include "CSV to JSON conversion" package */

const csvToJson = require('convert-csv-to-json');

/* Convert csv to JSON */
 
csvToJson.fieldDelimiter(',').getJsonFromCsv(csv_file_path);

csvToJson.generateJsonFileFromCsv(csv_file_path,json_file_path);
