
### STEP 4 - Form submit


This is an interesting bit of architecture we've done so far. We have built a reusable form that can be used to add a team member, or edit a team member. The last piece of the puzzle is this - when we submit the form, do we run an `addMember` function, or an `editMember` function? And how will the form know? Well, our form knows if we are editing a team member by whether or not there is the prop `memberToEdit`. (P.S. This can also be done with a boolean - something like `isEditing`...)

Okay, now that we understand how `Form.js` knows if we are editing or creating members, we can finish this app!

- Create a new function in `App.js` called `editMember` that will edit one or more of the details of a team member and pass it down to the second form component. You'll have to find a way to loop over the data in your state, find the specific team member you intend to edit, and finally change the details with the data sent up to you from the second form component. `.map()` will be your friend for that task. You'll also want to avoid directly mutating your data. The `...` spread operator will be your friend there.
- On form submit, do an `if` check to see if the `memberToEdit` prop is there or not, and run the correct functions in the `if` and `else` blocks based on that check.

Observe the power of reusability!
