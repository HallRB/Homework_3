# Homework_3
random password generator script

Website provides a user with the ability to generate a random string of characters as a password.

User first clicks "Generate Password" button

A prompt will appear asking the user to input the desired length of the password within the parameters of having the number of characters be between 8 and 126.
  If the user cancels without entering a value they will be alerted that they have not entered a valid value

If the user enters an accepted number they will be asked to confirm if they want the password to contain numbers:
  If they select ok, their generated password will include at least 1 number
  If they select cancel, their generated password will not include any numbers
  
Once the user has chosen whether or not to include numbers in their password, they will be asked to confirm if they want top include any special characters with a few listed for example:
  If they select ok, their generated password will include at least 1 special character
  If they select cancel, their generated password will not include any special characters
  
Once the user has chosen whether or not to include special characters in their password, they will be asked to confirm if they want any UPPERCASE letters included:
  If they select ok, their generated password will include at least 1 Capitalized letter
  If they select cancel, their generated password will not include any Capitalized letters
  
Once the user has chosen whether or not to include Capitalized letters in their password, they will be asked to confirm if they want any lowercase letters included:
  If they select ok, their generated password will include at least 1 lowercase letter
  If they select cancel, their generated password will not include any lowercase letter

Once all choices have been entered an alert will inform the user that their password is ready.

Their random generated password will include all confirmed variables by the user and will appear within the textarea which is within the image's door.

If the user clicks the "Copy to Clipboard" button, they will receive a confirmation alert that their password has been copied.

Known Bugs:

Copy to clipboard without entered password includes all variable in order as they appear in the JS

Selecting a number outside the set length parameters results in prompt asking the user again for a correct number value.  If another number outside the parameters is entered it will generate a password with as many characters as the out-of-bounds number entered.  Could be used if someone wanted to go outside the length parameters but have to set the character confirmations to their liking as the password generated through this will include the last set parameters.
