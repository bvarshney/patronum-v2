import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import CountrySelector from "../ui/country-selector";
import { COUNTRIES } from "@/lib/countries";

// Update the ContactForm component
export default function RegisterOpportunityForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState("GB");
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [blockedDomains, setBlockedDomains] = useState([]);

    useEffect(() => {
        // Fetch the JSON file containing 4700 emails
        const fetchEmails = async () => {
            try {
                const response = await axios.get('/domainBlock.json');
                const data = response.data;
                const extractedDomains = data.map(item => Object.values(item)[0]); // Extract domains
                setBlockedDomains(extractedDomains); // Set extracted domains as blockedDomains
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };
        fetchEmails();
    }, []);

    const formSchema = z.object({
        name: z.string().min(1, {message: "Name is required."}),
        email: z.string()
            .min(1, {message: "Email is required."})
            .email({message: "Invalid email format."})
            .refine((email) => {
            // Extract the domain from the email address
            const domain = email.split("@")[1];
            // Check if the domain is not in the blocked list
            return !blockedDomains.includes(domain);
        }, {message: "Please enter a valid business email."}),
        company: z.string().min(1, {message: "Company Name is required."}),
        country: z.string().min(1, {message: "Country is required."}),
        clname: z.string().min(1, {message: "Client Name is required."}),
        clemail: z.string()
            .min(1, {message: "Email is required."})
            .email({message: "Invalid email format."})
            .refine((email) => {
            // Extract the domain from the email address
            const domain = email.split("@")[1];
            // Check if the domain is not in the blocked list
            return !blockedDomains.includes(domain);
        }, {message: "Please enter a valid business email."}),
        clcompany: z.string().min(1, {message: "Client Company Name is required."}),
        clcountry: z.string().min(1, "Country is required."),
        cldomain: z.string().min(1, {message: "This field is required."}),
        cluser: z.string().min(1, {message: "This field is required."}),
        textarea: z.string().min(1, {message: "Message is required."}),
        terms: z.boolean().refine(value => value === true, {message: "You must agree to the terms."}),
        pageURL: z.string(),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        company: "",
        country: "",
        clname: "",
        clemail: "",
        clcompany: "",
        clcountry: "GB",
        cldomain: "",
        cluser: "",
        textarea: "",
        terms: false,
        pageURL: typeof window !== 'undefined' ? window.location.href : '', // Use window only in client-side context
        },
    });

    const onSubmit = async (data) => {
        setSubmitting(true);
        const countryName = COUNTRIES.find(c => c.value === country)?.title || 'Not specified';

        const formData = {
            name: data.clname,
            email: data.clemail,
            company: data.clcompany,
            countryName,
            pageURL: data.pageURL,
            tag: "Patronum Interest",
        };
        
        const message = `
            <h1><strong>Register An Opportunity Form Submission</strong></h1>
            <h3>Partner Details:</h3>
            <p><strong>Partner Name:</strong> ${data.name}</p>
            <p><strong>Partner Email:</strong> ${data.email}</p>
            <p><strong>Partner Organization Name:</strong> ${data.company}</p>
            <p><strong>Partner Country:</strong> ${data.country}</p>
            <h3>Opportunity Details:</h3>
            <p><strong>Client Name:</strong> ${data.clname}</p>
            <p><strong>Client Email:</strong> ${data.clemail}</p>
            <p><strong>Client Organization Name:</strong> ${data.clcompany}</p>
            <p><strong>Partner Country:</strong> ${countryName}</p>
            <p><strong>Client Google Workspace Domain:</strong> ${data.cldomain}</p>
            <p><strong>Client Number of Licensed User:</strong> ${data.cluser}</p><br>
            <p><strong>Message:</strong> ${data.textarea}</p>
            <p><strong>Terms Agreement:</strong> ${data.terms ? 'Agreed' : 'Not Agreed'}</p>
        `;
        try {

            // Send data to Mailchimp
            await axios.post('/api/mail-chimp', formData);            

            // Send email
            await axios.post('/api/mail', {
                message: message, 
                subject: "Opportunity Form Submission",
            });

            form.reset();
            setSubmitting(false);
            setSubmissionSuccess(true);
        } catch (error) {
            setSubmitting(false);
            setSubmissionError('Error sending email. Please try again later.');
        }
    };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 contact-form">
        {/* Form fields */}
        <div className="w-full text-center">
            <h3 className="lg:text-[2.2vw] text-[4.7vw] text-body font-medium">Partner Details</h3>
        </div>
        
        {/* Name field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="required">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company field */}
        <FormField 
            control={form.control}
            name="company"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Organization Name" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Country field */}
        <FormField 
            control={form.control}
            name="country"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Country" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Email field */}
        <FormField 
            control={form.control}
            name="email"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Business Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <div className="w-full text-center">
            <h3 className="lg:text-[2.2vw] text-[4.7vw] text-body font-medium">Opportunity Details</h3>
        </div>

        {/* Name field */}
        <FormField
          control={form.control}
          name="clname"
          render={({ field }) => (
            <FormItem className="required">
              <FormLabel>Client Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Client Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company field */}
        <FormField 
            control={form.control}
            name="clcompany"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Organization Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Organization Name" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Country Selector Field */}
        <FormField
            control={form.control}
            name="clcountry"
            render={({ field }) => (
                <FormItem className="required">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                        <CountrySelector
                            id={"country-selector"}
                            open={isOpen}
                            onToggle={() => setIsOpen(!isOpen)}
                            onChange={(value) => {
                                setCountry(value);
                                field.onChange(value);
                            }}
                            selectedValue={COUNTRIES.find((option) => option.value === country)}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Email field */}
        <FormField 
            control={form.control}
            name="clemail"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Business Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Business Email" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Domain field */}
        <FormField 
            control={form.control}
            name="cldomain"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Google Workspace Domain</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Google Workspace Domain" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* User field */}
        <FormField 
            control={form.control}
            name="cluser"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Number of Licensed User</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Number of Licensed User" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* TextArea field */}
        <FormField 
            control={form.control}
            name="textarea"
            render= {({ field }) => (
                <FormItem className="required mobile">
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Type Your Message Here." className="resize-none" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Terms checkbox field */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="terms">
                <div className="flex items-center gap-2">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <FormLabel>
                        <span>I agree to the</span>
                        <Link href="/privacy-policy" target="_blank" className="text-primary relative after:absolute after:bg-primary after:h-[1px] after:left-0 after:bottom-[-2px] after:scale-0 hover:after:scale-100 after:duration-300 after:w-full"> Privacy Policy</Link>
                    </FormLabel>
                </div>
                <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <Button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
        </Button>
        {submissionError && <p className="text-red-500 text-[1vw]">{submissionError}</p>}
        {submissionSuccess && (
            <p className="text-green-500 text-[1vw]">Email sent successfully!</p>
        )}
      </form>
    </Form>
  );
}