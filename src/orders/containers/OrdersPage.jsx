import { Button } from "../../common/components/Button";
import { PageTitle } from "../../common/components/PageTitle";

export function OrdersPage(props){
    return (
        <div>
            <PageTitle>Order Page </PageTitle>
            <Button onClick={props.onSignOut}>Sign out</Button>
        </div>
    )

}