'use client'
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

type FAQItemProps = {
  title: string;
  content: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="my-4">
      <article
        className={`border-2  ${
          isOpen
            ? ' duration-300 border-2 rounded-t-xl bg-Principal border-Principal text-white flex justify-between px-10 py-5 items-center cursor-pointer'
            : 'rounded-xl border-Principal flex justify-between px-10 py-5 items-center cursor-pointer duration-300'
        }`}
        onClick={toggleOpen}
      >
        {title}
        {isOpen ? <FaAngleDown /> : <FaAngleUp />}
      </article>

      {isOpen && (
        <div className="border-2 border-Principal p-6 rounded-b-xl duration-700">
          <p>{content}</p>
        </div>
      )}
    </section>
  );
};

const SectionQuestion: React.FC = () => {
  return (
    <section className=" w-full pt-10 ">
      <div className="ml-10 my-10">
        <h3 className="text-Principal text-4xl font-bold" id='QaQuestions'>Preguntas frecuentes</h3>
        <div className="mt-10 w-2/3 ">
          <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
             <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
             <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
        </div>
        
       
      </div>
      <div className="ml-10 my-10">
        <h3 className="text-Principal text-4xl font-bold" id='AboutEventry'>Sobre Eventry</h3>
        <div className="mt-10 w-2/3 ">
          <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
             <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
      
        </div>
        
       
      </div>
      <div className="ml-10 my-10 ">
        <h3 className="text-Principal text-4xl font-bold" id='terms'>Términos y condiciones</h3>
        <div className="mt-10 w-2/3 ">
          <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
             <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
        
        </div>
        
        
       
      </div>
      <div className="ml-10 my-10 ">
        <h3 className="text-Principal text-4xl font-bold" id='privacy'>Políticas de privacidad</h3>
        <div className="mt-10 w-2/3 ">
          <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
             <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
        
        </div>
        
        
       
      </div>
      <div className="ml-10 my-10 ">
        <h3 className="text-Principal text-4xl font-bold" id='soporte'>Soporte</h3>
        <div className="mt-10 w-2/3 ">
          <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
             <FAQItem
            title="Política de Cancelación y Reembolso"
            content="Quisque ornare fermentum nisl, eu congue quam aliquam vel. Donec eu sapien eu velit convallis tempus. Quisque non turpis et justo suscipit pulvinar. Et justo congue quam aliquam congue quam aliquam suscipit pulvinar et justo suscipit pulvinar."
          />
        
        </div>
        
        
       
      </div>

    </section>
  );
};

export default SectionQuestion;
