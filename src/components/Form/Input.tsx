import { forwardRef, ForwardRefRenderFunction } from "react";
import { 
  Input as ChakraInput,
  FormControl, FormLabel,
  InputProps as ChakraInputProps,
  FormErrorMessage
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
    { !!label && <FormLabel id={`label-${name}`} htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      name={name}
      id={name}
      focusBorderColor="pink.500"
      bg="gray.900"
      variant="filled"
      _hover={{
        bg: 'gray.900'
      }}
      size="lg"
      ref={ref}
      { ...rest }
    />

    {!!error && (
      <FormErrorMessage>{error.message}</FormErrorMessage>
    )}
  </FormControl>
  )
}

export const Input = forwardRef(InputBase);