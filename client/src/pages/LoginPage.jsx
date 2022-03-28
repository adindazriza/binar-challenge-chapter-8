import { useFormik } from "formik";
import {
  Box,
  Grid,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Image,
  VStack
} from "@chakra-ui/react";
import { useState } from 'react';
import { Link, useLocations } from 'react-router-dom';

export default function LoginPage() {
  const [userLogin, setUserLogin] = useState({});
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {   
      console.log(values, 'ini values dari login');
      setUserLogin({
      username: values.username,
      password: values.password,
    });
    console.log(userLogin);

    toast({
      position: 'top',
      title: `${userLogin.username} berhasil login`,
      description: 'kamu berhasil login',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  },
});
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={100} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <Grid>
            <Image
              borderRadius='full'
              boxSize='150px'
              src='https://bit.ly/dan-abramov' 
              alt='Dan Abramov'
            />
            </Grid>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="pink"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme="pink" isFullWidth>
              Login
            </Button>
            <Button mt="5" colorScheme="gray" as="a" href="/" >
                Back
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
