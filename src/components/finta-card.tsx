import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "./icons";
import Image from "next/image";


const websiteUrl = 'https://finta.io';
const tags = ['Next.js', 'Typescript', 'Inngest', 'Stripe', 'Prisma', 'TailwindCSS', 'Shadcn', 'Plaid', 'Posthog']

export function FintaCard() {
  return (
    <Link
      href={websiteUrl}
      target="_blank"
      className='cursor-pointer'
    >
      <Card
        className={
          "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
        }
      >
        <Image
          src='/finta-social-card-main.png'
          alt='Finta'
          className="h-60 w-full overflow-hidden object-cover object-top"
          width={3200}
          height={1672}
        />
        <CardHeader className="px-2">
          <div className="space-y-1">
            <div className="hidden font-sans text-xs underline print:visible">
              {websiteUrl?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full py-2 text-pretty font-sans text-sm text-foreground dark:prose-invert">
              During my nights and weekends, I&apos;m working on Finta - an app that automatically syncs your account balances, transactions, investments, and Stripe data to Airtable, Notion, Coda and Google Sheets so that you can manage your finances where you want, how you want.
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2">
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pb-2">
          {/* <Link href={websiteUrl} target="_blank">
            <Badge className="flex gap-2 px-2 py-1 text-[10px]">
              <Icons.globe className='size-4' />
              Website
            </Badge>
          </Link> */}
        </CardFooter>
      </Card>
    </Link>
  );
}