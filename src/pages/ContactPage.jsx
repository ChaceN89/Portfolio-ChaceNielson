/**
 * @file ContactPage.jsx
 * @module Pages/Contact
 * @desc Displays the contact form for users to reach out. Integrates `ContactForm` component.
 *
 * @author Chace Nielson
 * @created May 23, 2025
 * @updated May 23, 2025
 */
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <div className='container mx-auto py-20 px-2'>
      <ContactForm />
    </div>
  )
}
