import React, { useState } from 'react';

// ContactForm — form liên hệ dùng cho trang Liên hệ (chỉ demo UI, chưa nối API thật).
const AdminContactForm = ({
  title = 'Gửi liên hệ cho chúng tôi',
  submitLabel = 'Gửi liên hệ',
  fields = [
    { name: 'fullName', label: 'Họ và tên', type: 'text', required: true },
    { name: 'phone', label: 'Số điện thoại', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: false },
    { name: 'message', label: 'Nội dung', type: 'textarea', required: true },
  ],
}) => {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, val) => {
    setValues((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
      {title && (
        <h2 className="text-xl md:text-2xl font-black uppercase text-[#48a842] mb-6 text-center tracking-wide">
          {title}
        </h2>
      )}

      {submitted ? (
        <div className="text-center py-10">
          <p className="text-lg font-bold text-[#48a842]">Cảm ơn bạn đã liên hệ!</p>
          <p className="text-gray-500 mt-2">Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                {field.label}
                {field.required && <span className="text-red-500 ml-0.5">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  required={field.required}
                  rows={4}
                  value={values[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f4851a] focus:border-transparent transition"
                />
              ) : (
                <input
                  type={field.type}
                  required={field.required}
                  value={values[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f4851a] focus:border-transparent transition"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#f4851a] hover:bg-orange-600 text-white font-bold uppercase tracking-wide py-3 rounded-full transition-colors shadow-md"
          >
            {submitLabel}
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminContactForm;
