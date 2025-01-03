import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile(){
   return(
        <VStack flex={1}>
              <ScreenHeader title="Perfil do Usuário" />
              <ScrollView contentContainerStyle={{paddingBottom:36}}>
               <Center mt="$6" px="$10">
                  <UserPhoto
                  source ={{uri:"https://github.com/luannareginac.png"}}
                  alt="foto do usuário" 
                  size="xl"/>
                  <TouchableOpacity>
                     <Text 
                     color="$green500"
                     fontFamily="$heading"
                     fontSize="$md"
                     mt="$2" mb="$8">
                        Alterar foto
                     </Text>
                  </TouchableOpacity>
                  <Center gap="$4" w="$full">
                  <Input placeholder="nome" bg="$gray600"/>
                  <Input value="luanna@gmail.com" bg="$gray600" isReadOnly/>
                  <Heading
                  alignSelf="flex-start" fontFamily="$heading" color="$gray200" fontSize="$md" mt="$12" mb="$2">
                     Alterar senha
                  </Heading>
                  <Center w="$full" gap="$4">
                  <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry/>
                  <Input placeholder="Nova senha" bg="$gray600"secureTextEntry/>
                  <Input placeholder="Confirme a nova senha" bg="$gray600"secureTextEntry/>
                  <Button title="atualizar"/>
                  </Center>
               </Center>
               </Center>
          
              </ScrollView>
      </VStack>
   )
}