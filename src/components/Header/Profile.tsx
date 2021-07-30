import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Souza</Text>
        <Text color="gray.300" fontSize="small">
          gabriel.souza@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gabriel Souza"
        src="https://github.com/gabrielcsg19.png"
      />
    </Flex>
  )
}