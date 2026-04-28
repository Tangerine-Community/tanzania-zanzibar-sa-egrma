# Tanzania Zanzibar Self-Administered EGRA EGMA evaluation

Self-Administered EGRA / EGMA Self-Evaluation Tools content set for Tangerine. This content provides 2x self-evaluation tools, one is for reading and the other for math. Use this interactive content straight out of the box when creating new groups.

# Analysis of Instruments' Internal Consistency, Reliability, and Consistency

These tools were developed at the request of [Imagine Worldwide](https://www.imagineworldwide.org/) with the support of the [Jacobs Foundation](https://jacobsfoundation.org/). RTI carried out field testing and a pilot study to assess the tools' internal consistency, test-retest reliability, and concurrent validity with respect to "traditional" EGRA and EGMA. The report summarizing these findings is available [here](research/Tanzania_Kiswahili_SA-EGRMA_Final-Pilot-Report_2025.pdf). The version for Zanzibar only has minor wording changes to reflect the differing context. An addendum report showing updated analysis after the removal of some items according to recommendations by officials from NECTA and ZEC can be found [There](research/Updated_Analysis_of_Kiswahili_for_Tanzania_SAEGRA.pdf).


# Paper version

In the paper version of the instrument, you will find the English, Swahili, and audio file name. 
- In general, item prompts and information are marked as auto play, so that the student hears those when they open the section
- Item prompts, questions, and question options can be replayed by tapping on the respective icon
- Find the paper version [here](./Digital%20EGRMA%20Instrument_Kiswahili%20Translations_for%20Zanzibar.doc)


# Pre-built APK

Only for your evaluation of the app we have prebuilt an apk for you to try out the SA assessment. [Download the APK](https://drive.google.com/file/d/1px3isTWVdubCWcmKkIeU8wltnVDtXBN5/view?usp=drive_link) Make sure to follow the installation instructions and correct setup of the tablet for the best experience.
 - [Instructions on generic app installation](https://docs.google.com/document/d/1AYwOZKmWr89lcUxN17zxNxtI_SI6Q27D/edit?usp=drive_link&ouid=112152583932758147820&rtpof=true&sd=true) 
 - [Assessor manual](https://docs.google.com/document/d/13h1IKbNuoTHFQukVl3VNLzA-43N4D9q7/edit?usp=drive_link&ouid=112152583932758147820&rtpof=true&sd=true) - pay attention to page 10 Kiosk Mode - this must be switched in order to get the best app experience. Assessors can exit Kiosk mode by quickly tapping on an empty area of the assessment 8 times.

# Installation and Use

> [!WARNING]
> You must use Tangerine v3.32.2-rc-20 or older
> This content set uses the new radio blocks with images and sounds and the tangy prompt input for sound play.
> 


Please review how to create a content set on our [documentations site](https://docs.tangerinecentral.org/editor/advanced-form-programming/content-sets/#creating-a-new-content-set) If using the git URL to create the set, after ceation, go to your group's app config and add/modify the **uploadToken** , **homeURL**, **goHomeAfterFormSubmit**, **uploadUnlockedFormReponses**, **kioskMode**, **exitClicks** , **columnsOnVisitsTab** 
Compare with what is set up already in this content set's [client/app-config-default.json](client/app-config-default.json) file.
Read more on [app-config.json](https://docs.tangerinecentral.org/editor/advanced-form-programming/configuration/#configuration) 

From within the tangerine container execute the `group-create` command

 - Download the content set from this repository
 - Download the entire content of this repository into a new folder called `se-tools` 
 - Copy this folder into the `content-sets` folder located under the tangerine installation (`tangerine/content-sets`)

<img width="324" alt="Screen Shot 2022-12-06 at 9 47 53 AM" src="https://user-images.githubusercontent.com/453000/205863712-47282470-c656-4dfb-a7a7-f4c4774c8119.png">

Now open the tangerine container from the command line by executing: 
  ```docker exec -it tangerine bash```
from within the container execute: 
```create-group "SE Tools" se-tools```

<img width="450" alt="Screen Shot 2022-12-06 at 9 50 52 AM" src="https://user-images.githubusercontent.com/453000/205864383-6205bd60-60c4-4d51-8acd-93675e7904c6.png">


Wait for the command to complete.

<img width="400" alt="Screen Shot 2022-12-06 at 9 51 38 AM" src="https://user-images.githubusercontent.com/453000/205864544-3943a0ef-664a-4a48-8643-de805c3f9ace.png">

Now open the backend and find the new group that was created for you with the new content in it:

<img width="345" alt="Screen Shot 2022-12-06 at 9 52 20 AM" src="https://user-images.githubusercontent.com/453000/205864705-2004bf7d-5169-44c7-b2d6-b7d5deb31bac.png">

You will have the below forms available and some audio files and images under the image library!

<img width="1145" alt="Screen Shot 2022-12-06 at 9 52 35 AM" src="https://user-images.githubusercontent.com/453000/205864797-906c6603-684a-4201-9af2-dc1aa7f3c7ad.png">

(Create a release for the app and deploy)[https://docs.tangerinecentral.org/data-collector/deployment/#creating-releases-video] it to your tablet or Chrome Browser

Start the app in Kiosk mode by going to the top right menu and select Kiosk

<img width="975" alt="Screen Shot 2022-12-06 at 9 44 55 AM" src="https://user-images.githubusercontent.com/453000/205862971-6497f7ab-fd70-436f-b539-63f5ae1bbc4d.png">

Start the numbers or letters assessment and hand over the tablet to the child. 

<img width="971" alt="Screen Shot 2022-12-06 at 9 54 45 AM" src="https://user-images.githubusercontent.com/453000/205865324-17c63b14-2514-4f0c-bd7b-2ee72d7208dc.png">

