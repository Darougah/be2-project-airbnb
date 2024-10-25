// 'use client';

// import { useFormState } from 'react-dom';
// import { useEffect } from 'react';
// import { useToast } from '@/components/ui/use-toast';
// import { actionFunction } from '@/utils/types';

// const initialState = {
//   message: '',
// };

// function FormContainer({
//   action,
//   children,
// }: {
//   action: actionFunction;
//   children: React.ReactNode;
// }) {
//   const [state, formAction] = useFormState(action, initialState);
//   const { toast } = useToast();
//   useEffect(() => {
//     if (state.message) {
//       toast({ description: state.message });
//     }
//   }, [state]);
//   return <form action={formAction}>{children}</form>;
// }
// export default FormContainer;

// 'use client';

// import { useEffect } from 'react';
// import { useToast } from '@/components/ui/use-toast';
// import { actionFunction } from '@/utils/types';
// // Correct the import of useFormState
// import { useFormState } from 'react-dom'; // or wherever it's actually exported from

// const initialState = {
//   message: '',
// };

// function FormContainer({
//   action,
//   children,
// }: {
//   action: actionFunction;
//   children: React.ReactNode;
// }) {
//   const [state, formAction] = useFormState(action, initialState);
//   const { toast } = useToast();

//   useEffect(() => {
//     if (state.message) {
//       toast({ description: state.message });
//     }
//   }, [state, toast]);

//   return <form action={formAction}>{children}</form>;
// }

// export default FormContainer;



// new

// components/form/FormContainer.tsx
// components/form/FormContainer.tsx
'use client';

import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { actionFunction } from '@/utils/types';
import { useFormState } from 'react-dom'; // Adjust import if necessary

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
  enctype,
}: {
  action: actionFunction;
  children: React.ReactNode;
  enctype?: string;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);

  return (
    <form action={formAction} encType={enctype}>
      {children}
    </form>
  );
}

export default FormContainer;
