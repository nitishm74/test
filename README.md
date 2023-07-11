# Candidate Coding Exercise
### Mobile Application Developer – Ionic/Angular

Please complete the coding exercise below to demonstrate competency using the Ionic/Capacitor and Angular frameworks.  Prepare to review and demonstrate your completed exercise during the scheduled interview.  For any questions or issues please route via the recruiting agency.

Please fork this GitHub repo and make the required updates as explained below.

* Create an initial page that is displayed on app launch where the user can select a date and display required date.
* Display a header (H1 with font weight - 600) with content as ‘Sample App with ion- datetime component.’
* In the body of the page, display a form with a label, an input field (prefer to use ion-input) and a submit button.
    - Label content : ‘ Select a date from future’
    - Input requirements:
        - Placeholder content: ‘Select Date’
        - On focus/click on the input, launch ion-datetime component along with month and year options. 
        - In the calendar component, provide an ability to only select future dates and all the dates in the past including today are disabled.
        - Populate selected date in the field.
        - Show current year + 5 years in the year options.
    - Submit requirements:
        - Content: ‘Submit’
        - On click of submit, display a list of items below
            - ‘Today’ : Display Todays date
            - ‘Yesterday’ : Display Yesterday’s date
            - ‘10 days past selected date’: Display 10day’s past from the selected date
            - ‘1 year past selected date’: Display 1 year past from the selected date
    - CSS requirement for displaying output
        - Display a 5px red border for the list on all sides
        - Display list items in blue color
        - Item label in bold font
        - Item values in italic font

