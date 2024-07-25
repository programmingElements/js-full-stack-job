import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function SearchBar() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Search..." />
            <Button type="submit">Search</Button>
        </div>
    )
}