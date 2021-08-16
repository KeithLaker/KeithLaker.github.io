
# Updating the Sales Data Part 1

## Introduction

Autonomous Database automatically manages the data storage process for you, so there are no settings to monitor or tweak. You simply load your data, update your data and let Autonomous Database efficiently manage how that data is stored. You will update the movie sales data using MERGE.

Estimated Lab Time: 15 minutes

### Objectives

In this lab, you will:

*   Determine how much space the movie sales table is consuming.
*   Create an external table.
*   Determine how much space the external table is consuming.
*   Update the movie sales data using MERGE.
*   Confirm the very small increase in space usage after updating the data using MERGE.
*   Create additional external tables.

### Prerequisites

This lab assumes you have:

- Added a data integrity constraint in the previous lab.

## Overview 
MovieStream is a global business with finance departments distributed around the world. Each of these periodically generates a number of financial adjustments for customers in their respective countries. In practice, these will come in at various times and will need to be processed one-by-one. In this section we are going to process all the regional adjustment files altogether but it is important to bear in mind that each would usually be processed immediately on arrival (and therefore individually) so that we can always get the most up-to-date information from our warehouse. Below we will run the update process by creating an external table for each country’s adjustment file and then run the corresponding merge to update the sales data.

The files for this data load process are stored in a series of regional buckets. Use one of the following **URI strings** in the next step based on the closest location to the region where you have created your ADW.

*For example, if your ADW is located in our UK-London data center then you would select the first regional URI string for "Europe, Middle East, Africa" which is for a public bucket located in the London data center: 'https://objectstorage.uk-london-1.oraclecloud.com/n/dwcsprod/b/moviestream_data_load_workshop_20210709/o/'*

<div style="margin-left: 80px;">
<br>
<table class="wrapped relative-table confluenceTable" style="width: 100.0%;">
	<colgroup>
		<col style="width: 12.019421%;"/>
        <col style="width: 12.019421%;"/>
		<col style="width: 45.07344%;"/>
	</colgroup>
	<tbody>
		<tr>
			<th colspan="1" class="confluenceTh">Geographical Region</th>
            <th colspan="1" class="confluenceTh">Location</th>
			<th colspan="1" class="confluenceTh">Regional URI String</th>
		</tr>
		<tr>
			<td colspan="1" class="confluenceTd">Europe, Middle East, Africa</td>
            <td colspan="1" class="confluenceTd">London</td>
			<td class="confluenceTd">
                https://objectstorage.uk-london-1.oraclecloud.com/n/dwcsprod/b/moviestream_data_load_workshop_20210709/o<br>
            </td>
		</tr>
		<tr>
			<td colspan="1" class="confluenceTd"></td>
            <td colspan="1" class="confluenceTd">Frankfurt</td>
			<td class="confluenceTd">
                https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/dwcsprod/b/moviestream_data_load_workshop_20210709/o
            </td>
		</tr>
		<tr>
			<td colspan="1" class="confluenceTd">Americas</td>
            <td colspan="1" class="confluenceTd">Phoenix</td>
			<td colspan="1" class="confluenceTd">
                https://objectstorage.us-phoenix-1.oraclecloud.com/n/dwcsprod/b/moviestream_data_load_workshop_20210709/o<br>
            </td>
		</tr>
		<tr>
			<td colspan="1" class="confluenceTd"></td>
            <td colspan="1" class="confluenceTd">Ashburn</td>
			<td colspan="1" class="confluenceTd">
                https://objectstorage.us-ashburn-1.oraclecloud.com/n/dwcsprod/b/moviestream_data_load_workshop_20210709/o
            </td>
		</tr>
		<tr>
			<td colspan="1" class="confluenceTd">Japan</td>
            <td colspan="1" class="confluenceTd">Tokyo</td>
			<td colspan="1" class="confluenceTd">https://objectstorage.ap-tokyo-1.oraclecloud.com/n/dwcsprod/b/moviestream_data_load_workshop_20210709/o</td>
		</tr>
		<tr>
			<td colspan="1" class="confluenceTd">Asia &amp; Oceania</td>
            <td colspan="1" class="confluenceTd">Mumbai</td>
			<td colspan="1" class="confluenceTd">https://objectstorage.ap-mumbai-1.oraclecloud.com/n/dwcsprod/b/moviestream_data_load_workshop_20210709/o</td>
		</tr>
	</tbody>
</table>
<br>
</div>

**Note** : In the steps below we will use the same SQL feature used in the earlier data loading lab that allows us to define some variables to simplify this data merge process.
<br><br>

## TASK 1: Finding Out Space Usage for the Movie Sales Data

1. To find out how much space our movie sales table (movie\_sales\_fact) is consuming, we can run the following query our SQL worksheet

    ```
    <copy>SELECT
    segment_name,
    SUM(bytes)/1024/1024/1024 AS gb
    FROM user_segments
    WHERE segment_type='TABLE'
    AND segment_name = 'MOVIE_SALES_FACT'
    GROUP BY segment_name;
		</copy>
    ```

2. This will return something similar to the results shown below: 8.441 GB.

    ![Query result showing space consumed by movie sales table](images/3054194685.png)

<br><br>

## TASK 2: Creating The Staging Table For Argentina's Adjustments

1. Copy and paste the following code into your SQL worksheet - you can get the correct regional URI from the table in the overview section:

    ```
    <copy>define uri_ms_oss_bucket = 'paste_in_your_regional_uri_string_between_the_single_quotes';
    define csv_format_string = '{"type":"csv","skipheaders":"1"}';
    define adj_column_names = '"ORDER_NUM" INTEGER,"COUNTRY" VARCHAR2(256),"DISCOUNT_PERCENT" NUMBER,"ACTUAL_PRICE" NUMBER';</copy>
    ```

**Note**: in the above set of commands we have added an additional variable that contains the definitions of the columns within the table that we are going to create. Notice how using these variables makes the data loading code very easy to understand!

2. Copy and paste the following code into your SQL worksheet and then run the code:

    ```
    <copy>BEGIN
    dbms_cloud.create_external_table (
    table_name => 'MOVIE_FIN_ADJ_argentina_EXT',
    format =>  '&csv_format_string',
    column_list => '&adj_column_names',
    file_uri_list => '&uri_ms_oss_bucket/d801_movie_sales_finance_adj_argentina.csv'
    );END;
    /</copy>
    ```

3.  In the script output window, you should see the following which indicates that our new external table has been successfully created:

    ![Output window showing external table successfully created](images/3054194699.png)

4. To validate the external table, we can use the following command:

    ```
    <copy>BEGIN
    DBMS_CLOUD.VALIDATE_EXTERNAL_TABLE (table_name => 'MOVIE_FIN_ADJ_ARGENTINA_EXT');
    END;
    /</copy>
    ```

5. The validation process should only take a few seconds and return a successfully completed message:

    ![Message of successfully completed procedure](images/3054194698.png)

6. This shows us that the data we are going to query is OK. Therefore, we can use the following query to count how many rows are in the staging table:

    ```
    <copy>SELECT COUNT(*) FROM movie_fin_adj_argentina_ext;</copy>
    ```

7. This should show that we have 1,036 financial adjustments to process, as shown below:

    ![Query result showing number of rows](images/3054194697.png)
<br><br>

## TASK 3: How Much Space Is The Staging Table Using?

1. To find out how much space our new external table is consuming, we can run the following query in our SQL worksheet:

    ```
    <copy>SELECT
    segment_name,
    SUM(bytes)/1024/1024/1024 AS gb
    FROM user_segments
    WHERE segment_type='TABLE'
    AND segment_name=upper('MOVIE_FIN_ADJ_ARGENTINA_EXT')
    GROUP BY segment_name;</copy>
    ```

2. This will return zero rows into our results window:

    ![Query results show zero rows](images/3054194695.png)

    This means that our table is not consuming any space within our database.
<br><br>

## TASK 4: Updating The Movie Sales Data Using MERGE

1. Copy and paste the command below in SQL worksheet and run it:
    ```
    <copy>MERGE INTO movie_sales_fact a
		USING (
			SELECT order_num,
			discount_percent,
			actual_price
		FROM movie_fin_adj_argentina_ext) b
		ON ( a.order_num = b.order_num )
		WHEN MATCHED THEN
		UPDATE
		SET a.discount_percent = b.discount_percent,
		a.actual_price = b.actual_price;
		COMMIT;</copy>
    ```


2.  The update process should take about 2-3 seconds and then return the usual successfully completed message:

    ![Update process completes successfully](images/sql-data-loading-lab4-step4-substep2.png)

3. Let's run the same simple query again to validate that our financial adjustments file has been successfully processed. Copy and paste the following query into your SQL worksheet:

    ```
    <copy>SELECT
    SUM(actual_price)
    FROM movie_sales_fact;</copy>
    ```

4. This shows that our revenue has gone down slightly since we are now reporting a figure of $160,364,269.885 (vs. the previous value of $160,365,556.83):

    ![Results of query to validate financial adjustments file processed successfuly](images/lab-4-step-4-substep-4.png)

<br><br>

## TASK 5: Finding Out Space Usage For The Movie Sales Data

1.  Now we can run the same space calculation query in our SQL worksheet.

    ```
    <copy>SELECT
    segment_name,
    SUM(bytes)/1024/1024/1024 AS gb
    FROM user_segments
    WHERE segment_type='TABLE'
    AND segment_name='MOVIE_SALES_FACT'
    GROUP BY segment_name;</copy>
    ```

2. This will return something similar to the results shown below: 8.504 GB. This is a very, very slight increase in space usage! The previous value was 8.441 GB.

    ![Query result showing very slight increase in space usage](images/3054194684.png)

<br><br>

## Summary

Why is the lab important? This is a real-world scenario for the majority of data warehouse projects. Your data warehouse platform needs to efficiently manage updates to your data. The Oracle Database is built around a storage model that was designed from the start to efficiently manage data updates since will always be a must-have requirement for all data management projects.

Obviously, Autonomous Database automatically manages the data storage process for you so there are no settings to monitor or tweak. You simply load your data, update your data, and let Autonomous Database efficiently manage how that data is stored.

## Next Steps

- Experiment with using `DBMS_CLOUD.COPY_DATA` with your own data.

- Review the [Oracle Autonomous Database documentation for DBMS_CLOUD](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/dbms-cloud-subprograms.html#GUID-9428EA51-5DDD-43C2-B1F5-CD348C156122)

- Look at the new [LiveLabs workshop for the Database Actions data loading tools which are built into Autonomous Database](https://apexapps.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=789)

## Want to Learn More?

[Click here](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/load-data.html#GUID-1351807C-E3F7-4C6D-AF83-2AEEADE2F83E) for more information about how to load data into Autonomous Database. 

Please *proceed to the next lab*.

## **Acknowledgements**

* **Author** - Keith Laker, ADB Product Management
* **Adapted for Cloud by** - Richard Green, Principal Developer, Database User Assistance
* **Last Updated By/Date** - Keith Laker, August 5 2021
