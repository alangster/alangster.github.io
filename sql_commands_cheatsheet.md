SQL Commands Cheatsheet

Generic SELECT Statement

SELECT (DISTINCT) a
	FROM b
	(WHERE c)
	(GROUP BY d)
	(HAVING e)
	(ORDER BY f (DESC));

a - column name(s), the values from which will be displayed
  - if an * is used here, all columns from the table will be returned
  - prior to column name(s), if DISTINCT is specified, each unique value will be returned once (i.e., repeated values will only be displayed once)
b - table name(s), the columns from which will be utilized
c - condition(s) for the values in the columns 
	- comparisons: =  >  <  >=  <=
	  - e.g., WHERE id_number >= 1 (returns all rows with an id_number value greater than or 
	    equal to 1)	
	- negative comparisons: NOT, <> (not equal to)
	  - e.g., WHERE id_number NOT 1 (or id_number <> 1) (returns all rows with id_number value 
	    that is not 1)
	- booleans: AND, OR
	  - Use AND to return rows that satisfy multiple conditions, e.g., WHERE id_number > 1 AND birth_year = 1990 (returns all rows that have both an id_number value greater than 1 and a birth_year value equal to 1990)
	  - Use OR to return rows that satisfy one of multiple conditions, e.g., WHERE birth_year = 1990 OR birth_year = 1991 (returns all rows with birth_year value of 1990 and all rows with birth_year value 1991)
	- IN
	  - Use IN to return rows that satisfy one of multiple conditions, e.g., WHERE birth_year IN (1990, 1991, 1992) (returns all rows with birth_year value of 1990, birth_year value of 1991, and birth_year value of 1992)
	- BETWEEN
	  - Use BETWEEN to return rows with values in a range of values, e.g., WHERE birth_year BETWEEN 1990 AND 1992 (returns all rows with birth_year value that falls in the 1990-1992 range)
	- LIKE
	  - Use LIKE to search for a specific pattern
	    - Create pattern using % for multiple characters and _ for single characters
	  - e.g., WHERE first_name LIKE 'A%' (will return, for example, rows with first_name value of Alex, Abbey, Andrew, etc.)
	  - e.g., WHERE last_name LIKE '%G%' (will return, for example, rows with last_name value of Gooden, McGwire, Gray)
	  e.g., WHERE first_name LIKE '_ean' (will return, for example, rows with first_name value of Sean, Dean)
	- IS NULL / IS NOT NULL
	  - test columns for null values
d - column name(s), all rows with the same value for a certain column will be grouped together
  - can specify multiple column names, rows will be organized in order of column names specified
e - specify a condition relating to a value created using an aggregate function in the SELECT statement (e.g., COUNT, SUM)
f - column name(s), sort the resulting table by one or more columns
  - default is to sort in ascending order, for descending use the keyword DESC


Aggregate Functions

- AVG(column_name) returns the average value of a numeric column
- COUNT(x) 
  - if x = column_name, returns the number of non-null values in the column
  - if x = *, returns the number of rows in a table
  - if x = DISTINCT column_name, returns the number of distinct values in the column
- MAX(column_name) returns the greatest value in the column
- MIN(column_name) returns the lowest value in the column
- SUM(column_name) returns the total of all values in a numeric column
- UCASE(column_name) or LCASE(column_name) returns the values of a column converted to upper case or lower case
- MID(column_name, start, (length)) returns the characters from a specific text column, starting from the specified starting position (first is 1) 
  - can specify the number of characters returned using the optional 'length' parameter
- LEN(column_name) returns the length of the value in the text column

Creating Tables

CREATE TABLE table_name (
	column_1_name TYPE PRIMARY KEY,
	column_2_name TYPE,
	...,
	column_n_name TYPE
	);

- TYPE = storage class
  - NULL
  - INTEGER - stored as integer if TYPE contains the string "INT"
  - REAL (floating point number) - stored as real if TYPE contains strings "REAL", "FLOA", or "DOUB"
  - TEXT - stored as text if TYPE contains strings "CHAR", "CLOB", or "TEXT"
  - BLOB (blob of data stored exactly as it was input) - stored as blob if TYPE contains "BLOB" or if TYPE is not specified
  - NUMERIC - stored as numeric if no other storage classes are satisfied (e.g., DATE)

Inserting Data

INSERT INTO table_name (column_1_name, column_2_name,...column_n_name)
	VALUES (column_1_value, column_2_value,...column_n_value);
Can also just use: INSERT INTO table_name VALUES (column_1_value, column_2_value,...column_n_value);

Deleting Data

DELETE FROM table_name WHERE ...;

Updating Data

UPDATE table_name SET column_name = new value
	WHERE column_name = current value;

Replacing Data

REPLACE INTO table_name (column_1_name, column_2_name,...column_n_name)
	VALUES (column_1_value, column_2_value,...column_n_value);