# Email Integration Guide for New Client Form

The New Client Form is currently set up with a placeholder email submission. To make it functional and send form data to Tori's email, you have several options:

## Option 1: EmailJS (Recommended - Free & Easy)

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
   - Free tier: 200 emails/month
   - No backend required

2. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

3. **Update `NewClientModal.jsx`:**
   ```javascript
   import emailjs from '@emailjs/browser'
   
   const handleSubmit = async (e) => {
     e.preventDefault()
     setIsSubmitting(true)
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         {
           to_email: 'tori@example.com',
           from_name: formData.fullName,
           from_email: formData.email,
           phone: formData.phone,
           preferred_date: formData.preferredDate,
           preferred_time: formData.preferredTime,
           service: formData.serviceInterest,
           hair_type: formData.hairType,
           hair_length: formData.hairLength,
           color_treated: formData.colorTreated,
           allergies: formData.allergies,
           expectations: formData.expectations,
           how_heard: formData.howDidYouHear,
           notes: formData.additionalNotes
         },
         'YOUR_PUBLIC_KEY'
       )
       setSubmitSuccess(true)
     } catch (error) {
       console.error('Error sending email:', error)
       alert('Failed to submit form. Please try again.')
     } finally {
       setIsSubmitting(false)
     }
   }
   ```

## Option 2: Formspree

1. **Sign up at [Formspree](https://formspree.io/)**
   - Free tier: 50 submissions/month

2. **Update the form action:**
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault()
     setIsSubmitting(true)
     
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
     })
     
     if (response.ok) {
       setSubmitSuccess(true)
     }
     setIsSubmitting(false)
   }
   ```

## Option 3: Google Forms Integration

Keep using Google Forms but embed it in the modal:
```javascript
<iframe 
  src="YOUR_GOOGLE_FORM_URL"
  className="w-full h-[600px] border-0"
  title="New Client Form"
/>
```

## Option 4: Backend API

If you have a backend server, create an API endpoint:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  const response = await fetch('/api/new-client', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    setSubmitSuccess(true)
  }
  setIsSubmitting(false)
}
```

## Current Placeholder Behavior

The form currently:
- ✅ Collects all form data
- ✅ Shows loading state
- ✅ Displays success message
- ✅ Resets and closes after submission
- ⚠️ Only logs to console (doesn't actually send email)

**To activate email sending, implement one of the options above!**
