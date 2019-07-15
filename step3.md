### STEP 3 - Add the edit functionality

Next we're going to reuse the `Form` component to edit team members

**Get App.js ready for editing members**
- Add an edit button, or an edit icon next to each member you are rendering. When the button/icon is clicked, we want to set that member to a state property in `App` called `memberToEdit`. The function to do this should live in `App`, even if the button/icon invoking it are in a different component. Just pass the function down as a prop.

**Get Form.js ready to edit members**
- Pass `memberToEdit` down to `Form.js`
- If `Form` receives `props.memberToEdit`, then that member object should populate your state object that is controlling your forms. Now, it may be tempting to do something like this: `const [member, setMember] = useState(props.memberToEdit || {name: '', email: '', role: ''})` for our form to update with whatever member we click on. However, this is a trap that will cause a pretty big bug in our app. If props are used to set state like this, the state property will _NOT_ update when the prop changes. So... what kind of technique have we learned to keep something in sync with props when they change? `useEffect`! Write an effect that syncs with `props.memberToEdit`. When `props.memberToEdit` changes, the effect will update the `member` state object with the new data. This will populate the inputs with whichever member we are trying to update.

The flow for editing is hard to conceptualize. It should go something like this:

1. Our user clicks the `Edit` button/icon to start editing a team member
1. A function in App is invoked that sets the clicked member to `memberToEdit` on state
1. `Form.js` is receiving `memberToEdit` as a prop, and if that prop changes, the effect we built will set that object to state and populate the form with that member's info
1. The user updates the member info
1. Uh... now what do we do with this new data? If we submit the form, it will just add a new member 😫. Never fear! We will fix this in the next section!
