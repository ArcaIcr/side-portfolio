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
      {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.img
            src="/forest-bg.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.02, 1] }} // subtle zoom loop
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
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
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
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <textarea
            rows="4"
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
