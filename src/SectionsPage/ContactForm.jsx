// src/Components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    comida: '',
    comida_extra: '',
    direccion: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como una API
    console.log(formData);
  };

  return (
    <main className="mt-36 bg-slate-100 p-32">
      <form className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg space-y-8" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold text-center text-green-500 mb-6">Formulario de Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-green-600 font-medium">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Número */}
          <div>
            <label htmlFor="numero" className="block text-green-600 font-medium">Número</label>
            <input
              type="text"
              id="numero"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Comida */}
          <div>
            <label htmlFor="comida" className="block text-green-600 font-medium">Comida</label>
            <input
              type="text"
              id="comida"
              name="comida"
              value={formData.comida}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Comida extra (opcional) */}
          <div>
            <label htmlFor="comida_extra" className="block text-green-600 font-medium">Comida Extra (Opcional)</label>
            <input
              type="text"
              id="comida_extra"
              name="comida_extra"
              value={formData.comida_extra}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Dirección */}
          <div className="col-span-2">
            <label htmlFor="direccion" className="block text-green-600 font-medium">Dirección</label>
            <textarea
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              rows="4"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Mensaje */}
          <div className="col-span-2">
            <label htmlFor="mensaje" className="block text-green-600 font-medium">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        {/* Botón de enviar */}
        <div className="flex justify-center">
          <button type="submit" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Enviar</button>
        </div>
      </form>
    </main>
  );
};

export default ContactForm;
