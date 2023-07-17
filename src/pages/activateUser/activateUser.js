import Loading from "../../components/loading/loading";
import Success from "../../components/success/success";
import Button from "../../components/button/button";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {API} from "../../helpers/api";

const ActivateUser = () => {
  const params = useParams();
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const activateUser = async () => {
      setIsLoading(true);

      try {
        await API.activateUser(params);
      } catch (e) {
        console.warn(e);
      }

      setIsLoading(false);
    }

    activateUser();
  }, [])

  return (
    <Loading isLoading={isLoading}>
      <Success>
        <Success.Message>
          Email confirmed.
          Your registration is now completed
        </Success.Message>
        <Success.Action>
          <Button type="primary">Go to home</Button>
        </Success.Action>
      </Success>
    </Loading>
  )
}

export default ActivateUser;
