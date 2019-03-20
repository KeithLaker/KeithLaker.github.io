**Loading Data into Autonomous Data Warehouse Using Data Visualization
Desktop:**

Depending on the size and volume of the data and your skill set, there are a
number of ways to get data into Autonomous Data Warehouse. In this previous
[lab](https://oracle.github.io/learning-library/workshops/journey4-adwc/?page=LabGuide3.md)
we outlined the steps using SQL Developer and the use of object storage for very
large volumes of data.

In this post, we provide another simple and easy choice within just one tool,
Data Visualization Desktop, to upload data from a spreadsheet and immediately
analyze the data.

At this point, you should have performed the following:

1.  Obtained an Oracle cloud account

2.  Created your new Autonomous Data Warehouse

3.  Downloaded the credentials wallet for your Autonomous Data Warehouse

**Objectives:**

1.  Learn how to connect a desktop analytics tool to the powerful Autonomous
    Data Warehouse

2.  Learn how to secure a desktop client connection to Autonomous Data Warehouse

3.  Learn how to upload data to Autonomous Data Warehouse using Data
    Visualization Desktop

4.  Learn how to create a simple data visualization project with Data
    Visualization Desktop

**Required Artifacts:**

1.  Access to an existing Autonomous Data Warehouse instance

Set Up Local Data Visualization Desktop Environment in Windows
==============================================================

#### **STEP 1: Installing Oracle Data Visualization Desktop on a Windows Desktop**

-   Download the latest version of Oracle Data Visualization Desktop (DVD) from
    [here](http://www.oracle.com/technetwork/middleware/oracle-data-visualization/downloads/oracle-data-visualization-desktop-2938957.html)
    .

    -   After saving the installer .ZIP to your desktop, unzip the file and
        click on the DVDesktop .exe installer to follow the guided steps.

![](media/e6d47022d15c1c35837f3fdeda1cd85f.png)

>   https://oracle.github.io/learning-library/workshops/journey4-adwc/images/900/image004.png

![](media/3616008cbc95a6380c3524419ee52988.png)

>   https://oracle.github.io/learning-library/workshops/journey4-adwc/images/900/image006.png

#### **STEP 2: Securing Your Client Connection to Autonomous Data Warehouse**

You want to secure your data from the desktop all the way from the client
application to the server where your data is stored. You can now store password
credentials for connecting to databases in a client-side Oracle wallet, a secure
software container used to store authentication and signing credentials. This
wallet usage can simplify large-scale deployments that rely on password
credentials for connecting to databases. When this feature is configured,
application code, batch jobs, and scripts no longer need embedded user names and
passwords. This reduces risk because such passwords are no longer exposed, and
password management policies are more easily enforced without changing
application code whenever user names or passwords change.

You download the connection wallet as shown in this
[lab](https://oracle.github.io/learning-library/workshops/journey4-adwc/?page=LabGuide1.md).
Go to the directory that you saved your Connection Wallet file. Unzip this
zipped file.

![](media/a94da6653c306a607f6182e7178a1a7c.png)

>   https://oracle.github.io/learning-library/workshops/journey4-adwc/images/900/image009.png

-   You will need the following two files to create the secure connection.

    -   cwallet.sso

    -   tnsnames.ora

Create a Connection to Your Autonomous Data Warehouse from Data Visualization Desktop
=====================================================================================

#### **STEP 3: Create Connection**

-   Start Oracle Data Visualization Desktop. When Oracle Data Visualization
    Desktop opens, click on the **‘Create’** button and **‘Connection’**.

![](media/334d719f1c08dba845b0b3a38eb0bbdc.png)

>   https://oracle.github.io/learning-library/workshops/journey4-adwc/images/900/image018.png

-   In the Create Connection Dialog, select the highlighted option for **‘Oracle
    Autonomous Data Warehouse’** and progress through the wizard.

![](media/35203f004001786d9d9173c3ddf0fb32.jpg)

>   https://oracle.github.io/learning-library/workshops/journey4-adwc/images/900/image021.jpg

-   Go back to the directory where you saved your wallet file and extracted the
    file, **‘tnsnames.ora’**. Open the file and search for the wallet connection
    information (in our example "**adwfinance_high**") that you will use to
    connect with.

|                     |                                                                                          |
|---------------------|------------------------------------------------------------------------------------------|
| **Connection Info** | **Entry**                                                                                |
| Connection Name:    | Type in 'SALES_HISTORY'                                                                  |
| Host:               | (Copy from tnsnames.ora) e.g. adb.us-phoenix-1.oraclecloud.com                           |
| Port:               | (Copy from tnsnames.ora) e.g. 1522                                                       |
| Client Credentials: | Click 'Select' and select the file "cwallet.sso" from your unzipped **Wallet** in Step 2 |
| Username:           | Insert username created in previous labs. Same as SQL Developer credentials.             |
| Password            | Insert password created in previous labs. Same as SQL Developer credentials.             |
| Service Name:       | (Copy from tnsnames.ora) e.g. tuak89quycc88vqkzengdw1high.adwc.oraclecloud.com           |

-   After completing the fields, click on the **‘Save’** button.  
    *Note*: If you are running an older version of Data Visualization Desktop,
    you may not see an option to select Client Credentials. Update your Data
    Visualization Desktop or read about connections in older versions in the
    [Data Visualization Desktop User's Guide.
    ](https://docs.oracle.com/en/middleware/bi/data-visualization-desktop/bidvd/create-connections-oracle-adw.html#GUID-D3542D1C-B21F-45D1-86F7-DBAAE43A5574)

>   Below is a sample screen shot for “Create Connection”

![https://oracle.github.io/learning-library/workshops/journey4-adwc/images/900/image023.jpg](media/3292c705e511b31799e92f7e61c94c8d.jpg)

Now that the connection is set up let us take a sample data set and review it.
We chose a file titled “Sample Order Lines Oct.xls” for this exercise.

![](media/875a3e2a4321fc77f4e0ad495ca5af53.png)

Open **Data Visualization Desktop** and then

-   Click on **Create** on the right hand top corner

-   Click on **Data Flow**

![](media/2156cf0eacfd73b80485d8f6e8e2f127.png)

You will be prompted to a new screen where you will see an option to upload
file.

-   **Select** the file and hit add.

![D:\\My Data\\Desktop\\selectingoctdata.png](media/282c47dbcbd2924dc2c4a993ed003d76.png)

Once your data is loaded, right click the sample order data and select **Save
Data**.

![D:\\My Data\\Desktop\\projects that need to be sorted (3)\\saving_octdata.png](media/69c78164f89c99702891f5f253681330.png)

Name the data flow **Oct_Data_Upload**

The next step is to set up a **Database Connection**

![](media/5bb6ce5e532db065f887fb4403b09691.png)

Connect to the database. Name the table something that you find convenient. In
this case we chose **Oct_Data_Upload**

![](media/c0fec6a0707578756b49b4cdcbeed793.png)

Click **Run Data Flow** to upload your data into the Autonomous Database. Name
the Data Flow.

![](media/100c1d6dec1261e8739c1b9da1d10fb9.png)

Congrats you’ve pushed data from Data Visualization Desktop into the Autonomous
Database:

![](media/e277312fd715d296de477afae58cc206.png)

Now your data is ready to use in the most secure, scalable and fully managed
data warehouse: Autonomous Data Warehouse.

Next let us preview the data:

![A screenshot of a cell phone Description generated with very high confidence](media/aba499a676d6e32224ff91c2090425f6.png)

Click on **Create Project** at the top right corner.

This will take you to a canvas where you can create rich visualizations. Here we
create a simple chart for **Quantity Ordered** by **Order Date**

![A screenshot of a cell phone Description generated with very high confidence](media/aeebe5e2610e7b0ad8c629effd0f4c2d.png)

You can add multiple canvases and create visualizations within each canvas and
save them.

![A screenshot of a cell phone Description generated with very high confidence](media/6a41c1153a25675ed877704840cea1df.png)

Go and gain powerful insights from your data in the Autonomous Data Warehouse
using Data Visualization Desktop. You can find some additional labs on using
Data Visualization Desktop with Autonomous Data Warehouse
[here](https://oracle.github.io/learning-library/workshops/journey4-adwc/?page=LabGuide5.md).
