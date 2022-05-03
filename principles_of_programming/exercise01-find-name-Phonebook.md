# TASK: Find a given name in a phone book (a non-digital one!)

1. Write the pseudocode, identify the data, logic and actions
2. Come up with an alternative approach
3. Consider which version is more efficient

## PSEUDO-CODE

Do you have a phonebook?
If not
print a message saying you don't have access to the phonebook
exit
If yes
Open the book
while there is an entry
Go through each entry
If the entry is the same as the name you are looking for
print the name and phone number
close the phonebook
exit
close the phonebook
print a message to explain the name wasn't found
exit

2. Data, Logic, Actions
   a. Data
   phonebook
   name to search
   current entry
   b. Logic
   Checking if the phonebook is available
   Checking if there are more entries
   Checking if the current entry matches the name
   c. Actions
   Open/Access the book
   Compare entry and name
   Printing the messages

## Alternative version

Do you have a phonebook?
If not
print a message saying you don't have access to the phonebook
exit
If yes
Open the book
count the number of entries
set the counter to be the middle of the book

    (*)If the entry is the same as the name you are looking for
    print the name and phone number
    exit

    (*)compare current entry with name
    is the name earlier in the book?
    if yes
      //set the counter to be in the middle of first-index and current index:
        set last-index to be equal to currentIndex
        set current-index to be half way through first-index and last-index
        repeat (*)
      if not
      // set the counter to be in the middle of currentIndex and last-index:
        set first-index to be equal to current-index
        set current index to be equal to half way through first0index and last-index
        is first-index == last-index?
          if yes
           print you could't find the entry
           exit
           if no
          repeat (*)

## Data, Logic, Actions

1. Data

- phonebook
- name to search
- current entry

2. Logic

- Checking if the phonebook is defined
- Checking if there are more entries
- Checking if the current entry matches the name

2. Actions

- Open/Access the book
- Compare entry and name
- Printing the messages
- Close the phonebook

## Compare the two versions, which one is more efficient?

1. First version

- very fast if the search name was very close to the beginning
- very slow if it was at the econd
- on average slower that the alternatove version: O(n)

2. Alternative version

- It would be more efficient as after each iteration it discards half of the entries: O(logn)
