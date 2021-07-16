
# Deeper Analysis of Movie Sales Data

## Introduction

This lab is optional. This lab is aimed at people who are accustomed to working with spreadsheets and are comfortable creating sophisticated formulas within their worksheets. In this lab we explore how to use the SQL MODEL clause to make SQL more spreadsheet-like in terms of inserting new rows and new calculations into a query.

### Going A Little Deeper

Sometimes we will find that the data is organized in just the way we want it to be! In many cloud-based data warehouses, we are locked in to only viewing data in terms of the way it is stored. Making changes to the structure and organization of our data when it's in a spreadsheet is really easy - we can insert new rows and new columns to add new content.

Wouldn't it be great if our data warehouse offered the flexibility to add completely new rows to our data set that were derived from existing rows - effectively giving us the chance to build our own  **dimension**  values. In general data warehousing terminology this is known as adding **custom aggregates** to our result set.

What if we want to group the days of week into two new custom aggregates, effectively adding two new rows within our query?:

- **new row 1 - Weekday** which consists of values for Tuesday(#3), Wednesday(#4), Thursday(#5)

- **new row 2 - Long Weekend** which consists of values for Monday(#2), Friday(#6), Saturday(#7) and Sunday(#1)

Estimated Lab Time: 20 minutes

## STEP 1 - Analysis by Weekdays vs. Long Weekends

 **NOTE:** Different regions organize their day numbers in different ways. In Germany, for example, the week starts on Monday, so that day is assigned as day number one. In the US the day numbers start at one on Sunday. Therefore, it’s important to understand these regional differences. Oracle Database provides session settings that allow you to control these types of regional differences by using the **ALTER SESSION SET** command.

1. Before we being creating our next SQL, let’s set our territory as being “America” by using the following command:

    ```
    <copy>ALTER SESSION SET NLS_TERRITORY = America;</copy>
    ```

2. We can now check that our week starts on Sunday by using the following query:

    ```
    <copy>SELECT
    distinct day_name,
    TO_CHAR(day, 'D') AS day_no
    FROM movie_sales_fact
    order by 2;</copy>
    ```

3. It will return the following:

    ![Query results showing week starting Sunday](images/3038282319.png)

Now we know which day is the first day of the week we can move on. In spreadsheets, we can refer to values by referencing the row + column position such as A1 + B2. This would allow us to see more clearly the % contribution provided by each grouping so we can get some insight into the most heavily trafficked days for movie-watching. How can we do this?

4. Autonomous Data Warehouse has a unique SQL feature called the **MODEL** clause which creates a spreadsheet-like modeling framework over our data. If we tweak and extend the last query we can use the MODEL clause to add the new rows (**Weekday** and **Long Weekend**) into our results:

    ```
    <copy>
    SELECT
    quarter_name,
    day_name,
    contribution
    FROM
    (SELECT
    quarter_name,
    TO_CHAR(day, 'D') AS day_no,
    SUM(actual_price * quantity_sold) AS revenue
    FROM movie_sales_fact
    WHERE YEAR = '2020'
    GROUP BY quarter_name, to_char(day, 'D'), to_char(day, 'Day')
    ORDER BY quarter_name, to_char(day, 'D'))
    MODEL
    PARTITION BY (quarter_name)
    DIMENSION BY (day_no)
    MEASURES(revenue revenue, 'Long Weekend' day_name, 0 contribution)
    RULES(
    revenue[8] = revenue[3]+revenue[4]+revenue[5],
    revenue[9] = revenue[1]+revenue[2]+revenue[6]+revenue[7],
    contribution[1] = trunc((revenue[1])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[2] = trunc((revenue[2])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[3] = trunc((revenue[3])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[4] = trunc((revenue[4])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[5] = trunc((revenue[5])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[6] = trunc((revenue[6])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[7] = trunc((revenue[7])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[8] = trunc((revenue[3]+revenue[4]+revenue[5])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[9] = trunc((revenue[1]+revenue[2]+revenue[6]+revenue[7])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    day_name[2] = 'Monday',
    day_name[3] = 'Tuesday',
    day_name[4] = 'Wednesday',
    day_name[5] = 'Thursday',
    day_name[6] = 'Friday',
    day_name[7] = 'Saturday',
    day_name[1] = 'Sunday',
    day_name[8] = 'Weekday',
    day_name[9] = 'Long Weekend'
    )
    ORDER BY quarter_name, day_no;</copy>
    ```

5. This will generate the following output:

    ![Result of query using MODEL clause](images/3038282356.png)

6. See how easy it is to build up existing discoveries made using SQL, and extend our understanding of the data? As with previous examples, we can pivot the results and the final pivoted version of our code looks like this:

    ```
    <copy>SELECT *
    FROM
    (SELECT
    quarter_name,
    day_no,
    day_name,
    contribution
    FROM
    (SELECT
    quarter_name,
    TO_CHAR(day, 'D') as day_no,
    SUM(actual_price * quantity_sold) as revenue
    FROM movie_sales_fact
    WHERE YEAR = '2020'
    GROUP BY quarter_name, to_char(day, 'D'), to_char(day, 'Day')
    ORDER BY quarter_name, to_char(day, 'D'))
    MODEL
    PARTITION BY (quarter_name)
    DIMENSION BY (day_no)
    MEASURES(revenue revenue, 'Long Weekend' day_name, 0 contribution)
    RULES(
    revenue[8] = revenue[2]+revenue[3]+revenue[4],
    revenue[9] = revenue[1]+revenue[5]+revenue[6]+revenue[7],
    contribution[1] = trunc((revenue[1])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[2] = trunc((revenue[2])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[3] = trunc((revenue[3])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[4] = trunc((revenue[4])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[5] = trunc((revenue[5])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[6] = trunc((revenue[6])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[7] = trunc((revenue[7])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[8] = trunc((revenue[3]+revenue[4]+revenue[5])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    contribution[9] = trunc((revenue[1]+revenue[2]+revenue[6]+revenue[7])/(revenue[1]+revenue[5]+revenue[6]+revenue[7]+revenue[2]+revenue[3]+revenue[4])*100,2),
    day_name[2] = 'Monday',
    day_name[3] = 'Tuesday',
    day_name[4] = 'Wednesday',
    day_name[5] = 'Thursday',
    day_name[6] = 'Friday',
    day_name[7] = 'Saturday',
    day_name[1] = 'Sunday',
    day_name[8] = 'Weekday',
    day_name[9] = 'Long Weekend')
    ORDER BY quarter_name, day_no)
    PIVOT
    (
    SUM(contribution) contribution
    FOR quarter_name IN('Q1-2020' as "Q1", 'Q2-2020' as "Q2", 'Q3-2020' as "Q3", 'Q4-2020' as "Q4")
    )
    ORDER BY day_no;</copy>
    ```

7. The final output looks like this, where we can now see that over 60% of revenue is generated over those days within a Long Weekend! Conversely, the other three days in our week (Tuesday, Wednesday, Thursday) are generating nearly 40% of our weekly revenue, which means that on work/school nights we are still seeing strong demand for streaming movies. This type of information might be useful for our infrastructure team so they can manage their resources more effectively and our marketing team could use this information to help them drive new campaigns.

    ![Final query output using Pivot](images/3038282357.png)

## STEP 2 - Creating Lists of Customers 

The direct marketing team at MovieStream wants us to generate a report that groups customer email addresses by their level of education. The list needs to be in comma-separated format so they can load the information into their database that tracks demographic data of our customers. We have looked at comma-separated file formats during the data loading part of these workshops. The filename suffix associated with this format is usually **.csv**.

1. Creating this type of list as part of a query is actually very easy to do with Autonomous Data Warehouse because we can use the SQL **LISTAGG** function. To get started with this query, we first we need a unique list of customers by education:

    ```
    <copy>
    SELECT
    DISTINCT education,
    username,
    email
    FROM movie_sales_fact;</copy>
    ```
2. This query should return relatively quickly, as shown below.

    ![Initial query results grouping customer email addresses by level of education](images/3038282318.png)

Next, we need to group the email addresses by each attribute value of our Education column. The LISTAGG function will do this for us. It will take the email address in each row and concatenate it into a string in a similar way to the PIVOT function we used in the previous section. Now when we build the string of email addresses, we might end up with too many values for a specific level of education. At this point, many data warehouse engines will simply return an error message, something like **result of string concatenation is too long**. Fortunately, Autonomous Data Warehouse has a unique capability in that it can trap this error directly within the LISTAGG function.

Our LISTAGG function looks like this:

<pre>LISTAGG(email, ',' ON OVERFLOW TRUNCATE '...' WITH COUNT) WITHIN GROUP (ORDER BY username) AS customer_list</pre>

3. If we wrap this around our original query, we can use the following syntax to create the report we need:

    ```
    <copy>
    SELECT
    education,
    LISTAGG(email, ',' ON OVERFLOW TRUNCATE '...' WITH COUNT) WITHIN GROUP (ORDER BY username) AS customer_list
    FROM
    (SELECT
    DISTINCT education,
    username,
    email
    FROM movie_sales_fact)
    GROUP BY education
    ORDER BY 1;</copy>
    ```

4. The results should look similar to the following:

    ![Query result using LISTAGG](images/3038282317.png)

5. That's it! It looks simple, but only Autonomous Data Warehouse can run this query without generating an error and aborting. To understand why, let's tweak the query to show the rows where our string concatenation gets too long. Run the following modified query:

    ```
    <copy>
    SELECT
    education,
    SUBSTR(LISTAGG(email, ',' ON OVERFLOW TRUNCATE '...' WITH COUNT) WITHIN GROUP (ORDER BY username), -50) AS customer_list
    FROM
    (SELECT
    DISTINCT education,
    username,
    email
    FROM movie_sales_fact)
    GROUP BY education
    ORDER BY 1;</copy>
    ```

6. Notice that there is now a SUBSTR() function wrapped around our LISTAGG function. This additional function returns the last 50 characters of each row, which allows us to see that we have a lot of customers who achieved **High School** or **Bachelor** levels of education. For **High School** customers, our list could contain a possible 484 additional email addresses; and where the education level is **Bachelor**, then our list could contain an additional 255 email addresses. 

    ![Result of query with SUBSTR() function wrapped around LISTAGG function](images/3038282316.png)

We can send this initial report to the marketing team and see if they want us to extract the additional email addresses for them. Fortunately, Autonomous Data Warehouse has the tools to do this and we will explore one of those tools in the next section.

### Recap

Let's quickly recap what has been covered in this lab:

- Explored power of Oracle's built in spreadsheet-like SQL Model clause to add new rows to our results

- Learned how to combine spreadsheet-like operations with other SQL features such as PIVOT

- Learned how to use the LISTAGG function to concatenate string values into a single row

Please *proceed to the next lab*.

## **Acknowledgements**

- **Author** - Keith Laker, ADB Product Management
- **Adapted for Cloud by** - Richard Green, Principal Developer, Database User Assistance
- **Last Updated By/Date** - Richard Green, June 2021
