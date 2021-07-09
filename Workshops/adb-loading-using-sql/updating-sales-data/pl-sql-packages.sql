CREATE OR REPLACE PROCEDURE CREATE_FIN_ADJ_EXT AUTHID CURRENT_USER
IS
  ddl_string VARCHAR2(4000);
  
  CURSOR c_tables_adjs IS SELECT table_name
                          FROM user_tables
                          WHERE table_name LIKE 'MOVIE_FIN_ADJ%';

BEGIN

  FOR r_tables_adjs IN c_tables_adjs
  LOOP
      IF LENGTH(r_tables_adjs.table_name) > 0 OR LENGTH(r_tables_adjs.table_name) IS NOT NULL THEN
        ddl_string := 'exec dbms_cloud.create_external_table (table_name => '''||r_tables_adjs.table_name||''', format =>  '''&csv_format_string''', column_list => '''&adj_column_names''', file_uri_list => '&uri_ms_oss_bucket/d801_movie_sales_finance_adj_austria.csv');
    
        DBMS_OUTPUT.PUT_LINE(ddl_string);
        EXECUTE IMMEDIATE ddl_string;
        EXECUTE IMMEDIATE 'commit';
   END IF;
  END LOOP;

END;
/



CREATE OR REPLACE PROCEDURE RUN_FIN_ADJ AUTHID CURRENT_USER
IS
  ddl_string VARCHAR2(4000);
  
  CURSOR c_tables_adjs IS SELECT SUBSTR(SUBSTR(table_name,15), 1, INSTR(SUBSTR(table_name,15),'_')-1) as table_name
                          FROM user_tables
                          WHERE table_name LIKE 'MOVIE_FIN_ADJ%';

BEGIN

  FOR r_tables_adjs IN c_tables_adjs
  LOOP
      IF LENGTH(r_tables_adjs.table_name) > 0 OR LENGTH(r_tables_adjs.table_name) IS NOT NULL THEN
        ddl_string := 'MERGE INTO movie_sales_fact a USING
                  (SELECT order_num, discount_percent, actual_price
                   FROM movie_fin_adj_'||r_tables_adjs.table_name||'_ext)
                   b ON ( a.order_num = b.order_num )
                   WHEN MATCHED THEN UPDATE SET a.discount_percent = b.discount_percent,
                   a.actual_price = b.actual_price';

        DBMS_OUTPUT.PUT_LINE(ddl_string);
        EXECUTE IMMEDIATE ddl_string;
        EXECUTE IMMEDIATE 'commit';
   END IF;
  END LOOP;

END;
/


CREATE OR REPLACE PROCEDURE CREATE_FIN_ADJ_EXT(csv_format_string_in IN varchar2, adj_column_names_in IN varchar2, uri_ms_oss_bucket_in IN varchar2)  AUTHID CURRENT_USER
IS
  ddl_string VARCHAR2(4000);
  country_name varchar2(56);
  
  CURSOR c_tables_adjs IS SELECT table_name
                          FROM user_tables
                          WHERE table_name LIKE 'MOVIE_FIN_ADJ%';

BEGIN

  FOR r_tables_adjs IN c_tables_adjs
  LOOP
      IF LENGTH(r_tables_adjs.table_name) > 0 OR LENGTH(r_tables_adjs.table_name) IS NOT NULL THEN
        country_name := SUBSTR(SUBSTR(r_tables_adjs.table_name,15), 1, INSTR(SUBSTR(r_tables_adjs.table_name,15),'_')-1);

        ddl_string := 'exec dbms_cloud.create_external_table (table_name => '''||r_tables_adjs.table_name||''', format =>  '''||csv_format_string_in||''', column_list =>'''||adj_column_names_in||''',  file_uri_list => '''||uri_ms_oss_bucket_in||'d801_movie_sales_finance_adj_'||country_name||'_ext.csv'' )';
    
        DBMS_OUTPUT.PUT_LINE(ddl_string);
        
   END IF;
  END LOOP;

END;
/

set serveroutput on
exec CREATE_FIN_ADJ_EXT(csv_format_string_in => '{"type":"csv","skipheaders":"1"}', adj_column_names_in => '"ORDER_NUM" INTEGER,"COUNTRY" VARCHAR2(256),"DISCOUNT_PERCENT" NUMBER,"ACTUAL_PRICE" NUMBER', uri_ms_oss_bucket_in => 'https://objectstorage.uk-london-1.oraclecloud.com/n/adwc4pm/b/moviestream_prod/o');

define uri_ms_oss_bucket = 'paste_in_your_regional_uri_string_between_the_single_quotes';
define csv_format_string = '{"type":"csv","skipheaders":"1"};
define adj_column_names = '"ORDER_NUM" INTEGER,"COUNTRY" VARCHAR2(256),"DISCOUNT_PERCENT" NUMBER,"ACTUAL_PRICE" NUMBER';

exec dbms_cloud.create_external_table (table_name => 'MOVIE_FIN_ADJ_UZBEKISTAN_EXT', format =>  &csv_format_string, column_list =>  file_uri_list => 'https://objectstorage.uk-london-1.oraclecloud.com/n/adwc4pm/b/moviestream_prod/od801_movie_sales_finance_adj_UZBEKISTAN_ext.csv' )
