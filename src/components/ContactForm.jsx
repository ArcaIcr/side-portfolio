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
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Image using Tailwind's custom class */}
      <motion.div
        className="absolute inset-0 z-0 bg-forest bg-cover bg-center opacity-30"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        {/* Subtle zoom animation */}
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 12,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 text-gray-900 dark:text-white backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
        >
          <h2 className="text-2xl font-semibold text-center">Contact Me</h2>

          <input
            type="text"
            placeholder="Your Name"
            {...register('name', { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}

          <input
            type="email"
            placeholder="Your Email"
            {...register('email', { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}

          <textarea
            placeholder="Your Message"
            {...register('message', { required: true })}
            className="w-full p-2 border rounded"
          />
          {errors.message && (
            <span className="text-red-500">Message is required</span>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
