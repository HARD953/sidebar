import React, {useState} from 'react';
import { Text } from 'react-native';


import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    Colors,
    ButtonText,
    StyledButton,
    MsBox,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from '../../Components/styles';
import { StatusBar, View } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../Components/globalContext';
import Spinner from 'react-native-loading-spinner-overlay';

const {brand,darkLight, primary}=Colors;
const Welcome = () => {
    const [hidePassword,setHidePassword]=useState(true);
    const {userInfo, loading,logout}=useContext(AuthContext)
  return (
    <>
    <StatusBar style="light" />
        <InnerContainer>
            <WelcomeContainer>
                <WelcomeImage resizeMode="cover" source={require('../../assets/img/aide1.jpg')}/>
            <PageTitle Welcome={true}>Souriez A La Vie</PageTitle>
            <SubTitle Welcome={true}>Account Login</SubTitle>
            <SubTitle Welcome={true}>Welcome {userInfo.user_name}</SubTitle>
            <StyledFormArea>
            <Avatar resizeMode="cover" source={require('../../assets/img/aide1.jpg')} />
                <Line />
                <MsBox>...</MsBox>
                <Text>Welcome {userInfo.user_name}</Text> 
                <StyledButton onPress={logout}>
                    <Spinner visible={loading} />
                    <ButtonText>
                        Logout
                    </ButtonText>
                </StyledButton>

                </StyledFormArea>
            </WelcomeContainer>
        </InnerContainer>
    </>
  );
}
const  MyTextInput = ({ label, icon,isPassword,hidePassword,setHidePassword, ...props })=>{
    return (
         <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                    <Ionicons name={ hidePassword ? 'md-eye-off' : 'md-eye' } size={30} color={darkLight} />
                </RightIcon>
            )}
         </View> 
    );
};
export default Welcome;