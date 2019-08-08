<table class="tbl-heading"><tr><td class="td-logo">[![](images/obe_tag.png)](README.md)

September 21, 2018
</td>
<td class="td-banner">
# Bonus Lab 3: Loading Data into ADW using Data Visualization Desktop:
</td></tr><table>


## Introduction

Depending on the size and volume of the data, the frequency and your skill set, there are a number of choices to get data into Autonomous Data Warehouse. In the earlier labs we outlined the steps using SQL Developer and how to use the Object Store for very large volumes of data.   

In this post, we provide another simple and easy choice within just one tool, Data Visualization Desktop, to upload data from a spreadsheet and immediately analyze the data.


At this point, you should have performed the following:

1. Installed Data Visualization Desktop (see the steps in the previous Lab, Bonus Lab 2)
2. Downloaded the credentials wallet for your Autonomous Data Warehouse (see the steps in Lab 1). 
3. Created a connection to your Autonomous Data Warehouse  (see the steps in the previous Lab, Bonus Lab 2).
 
## Objectives
- Learn how to connect a desktop analytics tool to the powerful Autonomous Data Warehouse 
- Learn how to secure a desktop client connection to Autonomous Data Warehouse
- Learn how to create a simple data visualization project with Oracle Data Visualization Desktop
- Learn how to access and gain insights from data in the Autonomous Data Warehouse


## Required Artifacts
- Installation of Oracle Data Visualization Desktop (free with Autonomous Data Warehouse)
- Access to an existing Autonomous Data Warehouse instance 

## Creating a new data flow 

#### STEP 1: Viewing the spreadsheet data

Now that the connection is set up let us take a sample data set and review. We chose a file titled “Sample Order Lines Oct.xls” for this exercise.

   ![](./images/900-2/image001.png)



#### STEP 2: Builing a new data flow

Open Data Visualization Desktop and then
- Click on Create on the right hand top corner
- Click on Data Flow

   ![](./images/900-2/image002.png)
  
A new screen will be displayed where you will see an option to upload file. 
- Select the file and hit add.

   ![](./images/900-2/image003.png)


Once your data is loaded, right click the sample data to add step- select Save Data. 

   ![](./images/900-2/image004.png)


Name the data flow Oct_Data_Upload
The next step is to set up a Database Connection
 
   ![](./images/900-2/image005.png)


Connect to the database labeled DVD. Name the table something that you find convenient. In this case we chose Oct_Data_Upload 

   ![](./images/900-2/image006.png)

Click Run Data Flow to upload your data into the Autonomous Database. Name the Data Flow. 

   ![](./images/900-2/image007.png)

You should see a banner at the the top of the screen saying "The Data Flow was successfully saved". Congrats you’ve pushed data from DVD into your Autonomous Data Warehouse!

   ![](./images/900-2/image008.png)

Now your data is ready to use in the most secure, scalable and fully managed Data Warehouse. Go and gain powerful insights from your data in the Autonomous Data Warehouse using Data Visualization Desktop. You can revist the previous lab to build data visualizations using your new data set. 


## Great Work - All Done

<table class="tbl-heading"><tr><td class="td-logo">[![](images/obe_tag.png)](README.md)
</td>
<td class="td-banner">
Please click here to return to the [Getting Started Home page](README.md)
</td></tr><table>
