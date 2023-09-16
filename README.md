# 3 Features of The Project

* The project displays a list of available course with their price, details, credit hr etc.
* Users can choice course and add them to the cart list. And also they can see what is the total price and total credit.
* Users cannot take courses more than 20 credit hr, if they try to take more than 20 credit, a modal will be shown. Also same for the course, if a user has choosen a course already, he/she cannot choose it again.

# Discussion of Assignment Project States

I have used 1 useEffect state for fetching json data and I have used 5 useState in App.jsx and 1 useState in Course.jsx . The useStates are for following reasons:

* 1st useState is for managing and updating selected courses. It was kept in an array.
* 2nd useState is for total credit and updating total credit. It was a number and its inital value was 0.
* 3rd useState is for calculating and updating total price. Its initial value was also 0.
* 4th useState is for knowing whether the credit is completed or not. It was initially false. But when user try to take more than 20 credit its value becomes true and the modal shows you cannot take more than 20 credit.
* 5th useState is for calculating how much credit remains that the user can take. Its initial value is 20 as initially no user take any course and  remaining credit is 20.
* Another useState in Course.jsx is for holding and updating fetched data.
