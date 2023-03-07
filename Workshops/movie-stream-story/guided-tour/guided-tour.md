# A Quick Tour Of The Autonomous Data Warehouse Console

## Introduction

Autonomous Data Warehouse provides a web-based console to create, manage, and monitor Autonomous Databases. Let's take a quick tour of the Autonomous Data Warehouse console. 

Estimated Time: 10 minutes

### Objectives <optional>

In this lab, you will:
* Familiarize with the Autonomous Database console
* Examine the built-in Autonomous Database tools
* Check the performance monitoring features of the built-in Performance Hub

### Prerequisites
- This lab requires completion of the previous lab in the Contents menu on the left.

## **Step 1**: Familiarizing with the Autonomous Database Console
The Autonomous Data Warehouse console provides a user interface to create and manage autonomous databases, plus database tools to perform typical data warehouse tasks including loading and managing data, and a Performance Hub to monitor real-time and historical performance.

1. Navigate to the Autonomous Database Details page for your new database, My Quick Start ADW. There are 5 buttons across the top, and 3 tabs under those, to navigate among the many functions and tools of the Autonomous Database Console. Click the **More Actions** drop down menu, and note the dozen actions you can perform.

    ![ALT text is not available for this image](images/more-actions-menu.png)

2. Click the **Service Console** button.

    ![ALT text is not available for this image](images/click-service-console-button.png)

3. The **Overview** tab in the Service Console provides information about the performance of an Autonomous Database: CPU utilization, running SQL statements, Number of OCPUs allocated, and SQL statement response time.

    ![ALT text is not available for this image](images/service-console-overview-page.png)

4. Click the **Activity** tab. The Activity page shows past and current monitored SQL statements and detailed information about each statement. This page has two tabs: Monitor, Monitored SQL.

    ![ALT text is not available for this image](images/service-console-activity-page.png)

5. Click the **Administration** tab. The Administration page has cards to download client credentials (a wallet), set resource management rules, set or reset the Administrator password, manage Oracle Machine Learning users, and send feedback to Oracle.

    ![ALT text is not available for this image](images/service-console-administration-page.png)

6. Click the **Development** tab. The Development page has cards to download Oracle Instant Client, download SODA drivers, open Oracle APEX application development framework, open Database Actions tools page, open Oracle Machine Learning (OML) Notebooks, and access RESTFUL Services and SODA.

    ![ALT text is not available for this image](images/service-console-development-page.png)

## **Step 2**: Examining the Built-in Autonomous Database Tools
Autonomous Data Warehouse comes with a built-in suite of tools that can help you with many of the typical data warehouse tasks. This tool suite is complementary to various capabilities accessible via the SQL command line, which themselves are covered by other workshops. 

There are two ways to access the Autonomous Database built-in tool suite:

* Via the Autonomous Database console page
* Directly via URL

1. Switch back to the browser tab showing the Autonomous Database Details page. Click the **Tools** tab, and in the **Database Actions** card, click the link to **Open Database Actions**:

    ![ALT text is not available for this image](images/2879072598.png)

2. This will open a browser tab taking you to the Autonomous Data Warehouse **Database Actions** home page (shown below). This page has a card for each of the most common tasks that the data warehouse user would want to perform. The cards are grouped by theme. For example, here you see groups for Development and Data Tools. Each card has a title and description.  

    ![ALT text is not available for this image](images/2879071279.png)

3. If you want more information about each of the tasks related to each card then you can access the online help by clicking the **Question Mark** in the title bar, as indicated in the image below:

    ![ALT text is not available for this image](images/2879071281.png)

4. This will pop out a tray containing links to the relevant topics in the Autonomous Data Warehouse documentation. To close the help tray, simply click the  **X**.

    ![ALT text is not available for this image](images/2879071282.png)

## **Step 3**: Checking the Performance Monitoring Features of the Performance Hub
The Autonomous Data Warehouse console has a built-in performance monitoring tool called Performance Hub. This tool gives us both real-time and historical performance data for our Autonomous Data Warehouse.

1. Switch back to the browser tab showing the Autonomous Database Details page. Click the **Performance Hub** button.

    ![ALT text is not available for this image](images/click-performance-hub-button.png)

2. The Performance Hub page shows active session analytics along with SQL monitoring and workload information.There are tabs for Average Active Sessions (ASH Analytics), SQL monitoring, ADDM analysis, Workload analysis, and blocking sessions.

    ![ALT text is not available for this image](images/performance-hub-page.png)

    Click **Close** in the lower left corner when you are done examining the Performance Hub.

Please *proceed to the next lab*.

## Learn More

* Click [here](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/part-using.html#GUID-F9B1D121-5D89-40B4-90C6-8E8E233C2B3F) to see the Autonomous Database documentation.

## Acknowledgements
* **Author** - Rick Green, Principal Developer, Database User Assistance
* **Last Updated By/Date** - Rick Green, July 2021
