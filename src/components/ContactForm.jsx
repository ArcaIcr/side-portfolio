import React from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading('Sending message...');
    const { error } = await supabase.from('contacts').insert([data]);

    if (error) {
      console.error(error);
      toast.error('Something went wrong.', { id: toastId });
    } else {
      toast.success('Message sent successfully!', { id: toastId });
      reset();
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">Contact Me</h2>

      <input
        type="text"
        placeholder="Your Name"
        {...register("name", { required: "Name is required" })}
        className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white dark:bg-gray-900 dark:text-white"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Your Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
        className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white dark:bg-gray-900 dark:text-white"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <textarea
        placeholder="Your Message"
        rows="4"
        {...register("message", { required: "Message is required" })}
        className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white dark:bg-gray-900 dark:text-white"
      />
      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  );
};

export default ContactForm;
