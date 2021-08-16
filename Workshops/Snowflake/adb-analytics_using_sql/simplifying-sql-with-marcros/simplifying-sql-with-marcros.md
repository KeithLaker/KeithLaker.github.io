# Simplifying Your SQL Using Macros

## Introduction

SQL macros in Autonomous Data Warehouse

Estimated time: 15 minutes


### Objectives

- Understand that many data sets have patterns

- Learn SQL macros in Autnomous Data Warehouse

- Learn how to make migrations go more smoothly

- Learn how to simplify complex SQL queries


### Overview Of Business Problem

The marketing team at MovieStream are planning their next campaign which is to promote a new package of carefully selected comedy-family-sci-fi movies to specific customers.

The campaign will be driven by an email blast containing a limited-time discount code. The team has a specific customer profile they want to target, which is customers that watch a lot of family movies each quarter and the occasional sci-fi movie within the same quarter. They have asked you to find the list of customers who meet this very precise profile. How will you find those customers? 

The business requirement breaks down as follows:

1. Search for customers who have watched at least one family genre movie within a quarter during 2020. 

2. Filter the customers by those who have watched at least some additional family-related genre movies within a quarter during 2020.

3. Create a report for the marketing team that shows how many of each type of movie each customer watched within each quarter during 2020.

This all sounds very complicated, but using SQL pattern matching, it is very easy to find these customers!



## STEP 1 -  Identifying The Customers Who Watch Family Movies


## Recap

Let's quickly recap what has been covered in this lab:

- Using `MATCH_RECOGNIZE` to find patterns in your data

- Defining search rules for a pattern

- Quickly changing a pattern to meet new business requirements

- Calculating useful information from data inside your pattern

- Sharing results with other data warehouse users

Please *proceed to the next lab*.

## **Acknowledgements**

- **Author** - Keith Laker, ADB Product Management
- **Adapted for Cloud by** - Richard Green, Principal Developer, Database User Assistance
- **Last Updated By/Date** - Keith Laker, July 2021
