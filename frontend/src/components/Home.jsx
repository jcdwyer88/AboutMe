import {Separator} from "@/components/ui/separator.jsx";

export const Home = () => {

    return (
        <div style={{paddingLeft: '20px'}}>
            <Separator className="my-4"/>
            <div className="flex h-5 items-center space-x-4 text-sm">
                <Separator orientation="vertical"/>
                <div>Docs</div>
                <Separator orientation="horizontal"/>
                <div>Source</div>
            </div>
        </div>
    )
}