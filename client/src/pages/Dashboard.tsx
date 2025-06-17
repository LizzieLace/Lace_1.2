import { PinIcon, SearchIcon, SettingsIcon, UploadIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Data for new emails
const newEmails = [
  {
    id: 1,
    title: "Mothers Day Social Media Post",
    sender: '"Raghav, Aditi"<adraghav@iu.edu>',
    date: "Mon, 9 Jun 2025 19:00:40 +0000",
    images: [
      "/figmaAssets/frame-91.svg",
      "/figmaAssets/frame-69.svg",
      "/figmaAssets/frame-79.svg",
      "/figmaAssets/frame-72.svg",
    ],
  },
  {
    id: 2,
    title: "Illustration Designs",
    sender: '"Raghav, Aditi"<adraghav@iu.edu>',
    date: "Mon, 9 Jun 2025 19:00:40 +0000",
    images: [
      "/figmaAssets/frame-91-6.svg",
      "/figmaAssets/frame-69-5.svg",
      "/figmaAssets/frame-79-3.svg",
    ],
  },
  {
    id: 3,
    title: "Graphic Designs for Poster",
    sender: '"Raghav, Aditi"<adraghav@iu.edu>',
    date: "Mon, 9 Jun 2025 19:00:40 +0000",
    images: ["/figmaAssets/frame-91-5.svg", "/figmaAssets/frame-69-7.svg"],
  },
  {
    id: 4,
    title: "Geometric Designs for Emailer",
    sender: '"Raghav, Aditi"<adraghav@iu.edu>',
    date: "Mon, 9 Jun 2025 19:00:40 +0000",
    images: ["/figmaAssets/frame-91-4.svg"],
  },
];

// Data for older emails
const olderEmails = [
  {
    id: 1,
    title: "Mother's Day Social Media Post",
    sender: '"Raghav, Aditi"<adraghav@iu.edu>',
    date: "Mon, 9 Jun 2025 19:00:40 +0000",
    tags: ["Typography", "Layout"],
    badges: ["Urgent", "3 pending"],
    comments: 4,
    images: [
      "/figmaAssets/frame-91.svg",
      "/figmaAssets/frame-69.svg",
      "/figmaAssets/frame-79.svg",
      "/figmaAssets/frame-72.svg",
    ],
  },
  {
    id: 2,
    title: "Mother's Day Social Media Post",
    sender: '"Raghav, Aditi"<adraghav@iu.edu>',
    date: "Mon, 9 Jun 2025 19:00:40 +0000",
    tags: ["Typography", "Layout"],
    badges: ["Urgent", "3 pending"],
    comments: 4,
    images: [
      "/figmaAssets/frame-91.svg",
      "/figmaAssets/frame-69.svg",
      "/figmaAssets/frame-79.svg",
      "/figmaAssets/frame-72.svg",
    ],
  },
  {
    id: 3,
    title: "Mother's Day Social Media Post",
    sender: '"Raghav, Aditi"<adraghav@iu.edu>',
    date: "Mon, 9 Jun 2025 19:00:40 +0000",
    badges: ["Urgent", "3 pending"],
    comments: 4,
    images: [
      "/figmaAssets/frame-91.svg",
      "/figmaAssets/frame-69.svg",
      "/figmaAssets/frame-79.svg",
      "/figmaAssets/frame-72.svg",
    ],
  },
  {
    id: 4,
    title: "Mother's Day Social Media Post",
    sender: '"Raghav, Aditi"<adraghav@iu.edu>',
    date: "Mon, 9 Jun 2025 19:00:40 +0000",
    badges: ["Urgent", "3 pending"],
    comments: 4,
    images: [
      "/figmaAssets/frame-91.svg",
      "/figmaAssets/frame-69.svg",
      "/figmaAssets/frame-79.svg",
      "/figmaAssets/frame-72.svg",
    ],
  },
];

// Data for feedback items
const feedbackItems = [
  {
    id: 1,
    title: "Mother's Day Social Media Post",
    content: "The colors feel too muted. Can we make it more vibrant?",
    image: "/figmaAssets/frame-91-6.svg",
    lastEdited: "10 mins ago",
    tags: ["Typography"],
  },
  {
    id: 2,
    title: "Mother's Day Social Media Post",
    content: "The colors feel too muted. Can we make it more vibrant?",
    image: "/figmaAssets/frame-69-5.svg",
    lastEdited: "10 mins ago",
  },
  {
    id: 3,
    title: "Mother's Day Social Media Post",
    content: "The colors feel too muted. Can we make it more vibrant?",
    image: "/figmaAssets/frame-69.svg",
    lastEdited: "10 mins ago",
    tags: ["Client Name", "Typography"],
  },
];

// Data for pinned items
const pinnedItems = [
  {
    id: 1,
    title: "Mother's Day Social Media Post",
    content: "The colors feel too muted. Can we make it more vibrant?",
    image: "/figmaAssets/frame-69.svg",
    lastEdited: "10 mins ago",
    tags: ["Client Name", "Typography"],
  },
  {
    id: 2,
    title: "Mother's Day Social Media Post",
    content: "The colors feel too muted. Can we make it more vibrant?",
    image: "/figmaAssets/frame-72.svg",
    lastEdited: "10 mins ago",
  },
];

export const Dashboard = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#f3f5f6] p-6">
      <div className="max-w-[1680px] mx-auto flex flex-col gap-4">
        {/* Header */}
        <Card className="flex items-center justify-between px-6 py-2 bg-white rounded-lg w-full">
          <img
            className="relative w-6 h-[28.15px]"
            alt="Logo"
            src="/figmaAssets/group.png"
          />

          <div className="flex w-full items-center justify-end gap-6 relative">
            <div className="flex w-[386px] h-[42px] items-center relative">
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon className="h-4 w-4 text-slate-500" />
                </div>
                <Input
                  className="pl-10 h-[42px] bg-white"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="flex items-center gap-5 p-2">
              <Button variant="ghost" size="icon" className="p-0">
                <SettingsIcon className="h-6 w-6" />
              </Button>
              <Avatar className="h-6 w-6">
                <img
                  className="h-full w-full object-cover"
                  alt="Profile"
                  src="/figmaAssets/image.png"
                />
              </Avatar>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-4 w-full pb-8 items-start">
          {/* Left Column - All Media */}
          <div className="w-full">
            <Card className="w-full h-[950px] p-6 bg-white rounded-lg shadow-drop-shadow-100 overflow-y-auto hide-scrollbar">
              <div className="w-full flex justify-between items-center mb-10">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-2xl font-bold font-ador-hairline">
                    All Media
                  </CardTitle>
                  <CardDescription className="text-sm [font-family:'Inter',Helvetica] text-vibrant-labelsvibrant-secondary">
                    You can view your media here
                  </CardDescription>
                </div>
                <Button variant="outline" className="flex items-center gap-1">
                  <UploadIcon className="h-4 w-4" />
                  <span>Import from Mail</span>
                </Button>
              </div>

              <Tabs defaultValue="new-emails" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="new-emails">New emails</TabsTrigger>
                  <TabsTrigger value="older-emails">Older emails</TabsTrigger>
                </TabsList>
                
                <TabsContent value="new-emails" className="mt-6 pb-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-6">
                      {newEmails.slice(0, 2).map((email) => (
                        <Card
                          key={email.id}
                          className="p-4 border border-[#e5e5ea] flex flex-col gap-[26px] items-center"
                        >
                          <CardContent className="p-0 flex items-start justify-center gap-2">
                            <div className="flex flex-col w-[306px] gap-2">
                              <h4 className="font-m3-title-medium text-black">
                                {email.title}
                              </h4>
                              <div className="flex items-center gap-2 w-full">
                                <Avatar className="w-6 h-6 bg-[#d0bcff] rounded-full">
                                  <AvatarFallback className="text-white font-m3-label-small">
                                    A
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col gap-1 flex-1">
                                  <p className="font-caption2-regular text-black">
                                    {email.sender}
                                  </p>
                                  <p className="font-caption2-regular text-black">
                                    {email.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <img
                              className="w-6 h-6"
                              alt="Gmail"
                              src="/figmaAssets/social-icons---gmail.svg"
                            />
                          </CardContent>

                          <div className="flex h-16 items-center gap-2 w-full">
                            {email.images.map((image, index) => (
                              <div
                                key={index}
                                className="flex-1 h-full rounded-lg bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                              />
                            ))}
                            {/* Fill empty slots with white spaces if needed */}
                            {Array(4 - email.images.length)
                              .fill(0)
                              .map((_, index) => (
                                <div
                                  key={`empty-${index}`}
                                  className="flex-1 h-full rounded-lg bg-white"
                                />
                              ))}
                          </div>

                          <div className="relative w-[250px] h-10">
                            <Button className="w-full h-full bg-[#4f378b] rounded-full flex items-center justify-center gap-1">
                              <img
                                className="w-[17px] h-[19px] brightness-0 invert"
                                alt="Lace logo"
                                src="/figmaAssets/lace-logo.svg"
                              />
                              <span className="text-slate-50 font-text-sm-leading-6-medium">
                                Summarize Feedback
                              </span>
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div className="flex gap-6">
                      {newEmails.slice(2, 4).map((email) => (
                        <Card
                          key={email.id}
                          className="p-4 border border-[#e5e5ea] flex flex-col gap-[26px] items-center"
                        >
                          <CardContent className="p-0 flex items-start justify-center gap-2">
                            <div className="flex flex-col w-[306px] gap-2">
                              <h4 className="font-m3-title-medium text-black">
                                {email.title}
                              </h4>
                              <div className="flex items-center gap-2 w-full">
                                <Avatar className="w-6 h-6 bg-[#d0bcff] rounded-full">
                                  <AvatarFallback className="text-white font-m3-label-small">
                                    A
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col gap-1 flex-1">
                                  <p className="font-caption2-regular text-black">
                                    {email.sender}
                                  </p>
                                  <p className="font-caption2-regular text-black">
                                    {email.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <img
                              className="w-6 h-6"
                              alt="Gmail"
                              src="/figmaAssets/social-icons---gmail.svg"
                            />
                          </CardContent>

                          <div className="flex h-16 items-center gap-2 w-full">
                            {email.images.map((image, index) => (
                              <div
                                key={index}
                                className="flex-1 h-full rounded-lg bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                              />
                            ))}
                            {/* Fill empty slots with white spaces if needed */}
                            {Array(4 - email.images.length)
                              .fill(0)
                              .map((_, index) => (
                                <div
                                  key={`empty-${index}`}
                                  className="flex-1 h-full rounded-lg bg-white"
                                />
                              ))}
                          </div>

                          <div className="relative w-[250px] h-10">
                            <Button className="w-full h-full bg-[#4f378b] rounded-full flex items-center justify-center gap-1">
                              <img
                                className="w-[17px] h-[19px] brightness-0 invert"
                                alt="Lace logo"
                                src="/figmaAssets/lace-logo.svg"
                              />
                              <span className="text-slate-50 font-text-sm-leading-6-medium">
                                Summarize Feedback
                              </span>
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="older-emails" className="mt-6 pb-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-6">
                      {olderEmails.slice(0, 2).map((email) => (
                        <Card
                          key={email.id}
                          className="p-4 border border-[#ebedf0] flex flex-col gap-[26px] items-center"
                        >
                          <CardContent className="p-0 flex flex-col gap-4 w-full">
                            <div className="flex items-start justify-center gap-2">
                              <div className="flex flex-col w-[306px] gap-2">
                                <h4 className="font-m3-title-medium text-black">
                                  {email.title}
                                </h4>
                                <div className="flex items-center gap-2 w-full">
                                  <Avatar className="w-6 h-6 bg-[#d0bcff] rounded-full">
                                    <AvatarFallback className="text-white font-m3-label-small">
                                      A
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex flex-col gap-1 flex-1">
                                    <p className="font-caption2-regular text-[#999999]">
                                      {email.sender}
                                    </p>
                                    <p className="font-caption2-regular text-[#999999]">
                                      {email.date}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <img
                                className="w-6 h-6"
                                alt="Gmail"
                                src="/figmaAssets/social-icons---gmail.svg"
                              />
                            </div>

                            {email.tags && (
                              <div className="flex items-center gap-2">
                                {email.tags.map((tag, index) => (
                                  <Badge
                                    key={index}
                                    className="bg-[#e5e5ea] text-black font-chip-label"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            {email.badges && (
                              <div className="flex items-center gap-2">
                                {email.badges.map((badge, index) => (
                                  <Badge
                                    key={index}
                                    className={`font-chip-label ${
                                      badge === "Urgent"
                                        ? "bg-[#ff3b30] text-white"
                                        : "bg-[#007aff] text-white"
                                    }`}
                                  >
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center gap-2">
                              <p className="font-footnote-regular text-[#999999]">
                                💬 {email.comments} comments
                              </p>
                            </div>
                          </CardContent>

                          <div className="flex h-16 items-center gap-2 w-full">
                            {email.images.map((image, index) => (
                              <div
                                key={index}
                                className="flex-1 h-full rounded-lg bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                              />
                            ))}
                            {/* Fill empty slots with white spaces if needed */}
                            {Array(4 - email.images.length)
                              .fill(0)
                              .map((_, index) => (
                                <div
                                  key={`empty-${index}`}
                                  className="flex-1 h-full rounded-lg bg-white"
                                />
                              ))}
                          </div>

                          <div className="relative w-[250px] h-10">
                            <Button className="w-full h-full bg-[#4f378b] rounded-full flex items-center justify-center gap-1">
                              <img
                                className="w-[17px] h-[19px] brightness-0 invert"
                                alt="Lace logo"
                                src="/figmaAssets/lace-logo.svg"
                              />
                              <span className="text-slate-50 font-text-sm-leading-6-medium">
                                Summarize Feedback
                              </span>
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div className="flex gap-6">
                      {olderEmails.slice(2, 4).map((email) => (
                        <Card
                          key={email.id}
                          className="p-4 border border-[#ebedf0] flex flex-col gap-[26px] items-center"
                        >
                          <CardContent className="p-0 flex flex-col gap-4 w-full">
                            <div className="flex items-start justify-center gap-2">
                              <div className="flex flex-col w-[306px] gap-2">
                                <h4 className="font-m3-title-medium text-black">
                                  {email.title}
                                </h4>
                                <div className="flex items-center gap-2 w-full">
                                  <Avatar className="w-6 h-6 bg-[#d0bcff] rounded-full">
                                    <AvatarFallback className="text-white font-m3-label-small">
                                      A
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex flex-col gap-1 flex-1">
                                    <p className="font-caption2-regular text-[#999999]">
                                      {email.sender}
                                    </p>
                                    <p className="font-caption2-regular text-[#999999]">
                                      {email.date}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <img
                                className="w-6 h-6"
                                alt="Gmail"
                                src="/figmaAssets/social-icons---gmail.svg"
                              />
                            </div>

                            {email.badges && (
                              <div className="flex items-center gap-2">
                                {email.badges.map((badge, index) => (
                                  <Badge
                                    key={index}
                                    className={`font-chip-label ${
                                      badge === "Urgent"
                                        ? "bg-[#ff3b30] text-white"
                                        : "bg-[#007aff] text-white"
                                    }`}
                                  >
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center gap-2">
                              <p className="font-footnote-regular text-[#999999]">
                                💬 {email.comments} comments
                              </p>
                            </div>
                          </CardContent>

                          <div className="flex h-16 items-center gap-2 w-full">
                            {email.images.map((image, index) => (
                              <div
                                key={index}
                                className="flex-1 h-full rounded-lg bg-cover bg-center"
                                style={{ backgroundImage: `url(${image})` }}
                              />
                            ))}
                            {/* Fill empty slots with white spaces if needed */}
                            {Array(4 - email.images.length)
                              .fill(0)
                              .map((_, index) => (
                                <div
                                  key={`empty-${index}`}
                                  className="flex-1 h-full rounded-lg bg-white"
                                />
                              ))}
                          </div>

                          <div className="relative w-[250px] h-10">
                            <Button className="w-full h-full bg-[#4f378b] rounded-full flex items-center justify-center gap-1">
                              <img
                                className="w-[17px] h-[19px] brightness-0 invert"
                                alt="Lace logo"
                                src="/figmaAssets/lace-logo.svg"
                              />
                              <span className="text-slate-50 font-text-sm-leading-6-medium">
                                Summarize Feedback
                              </span>
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Right Column - Feedback */}
          <div className="w-full">
            {/* All Feedback Section */}
            <Card className="w-full h-[950px] p-6 bg-white rounded-lg shadow-drop-shadow-100 overflow-y-auto hide-scrollbar">
              <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-2 flex-1">
                  <CardTitle className="text-2xl font-bold font-ador-hairline">
                    All Feedback
                  </CardTitle>
                  <CardDescription className="text-sm [font-family:'Inter',Helvetica] text-vibrant-labelsvibrant-secondary">
                    You can manage your feedback here
                  </CardDescription>
                </div>
              </div>

              <Tabs defaultValue="recently-viewed" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="recently-viewed">Recently viewed</TabsTrigger>
                  <TabsTrigger value="pinned">Pinned</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recently-viewed" className="mt-6 pb-6">
                  <div className="flex flex-col gap-6">
                    {feedbackItems.map((item) => (
                      <Card
                        key={item.id}
                        className="p-4 border border-[#e5e5ea] flex items-start gap-4"
                      >
                        <div className="relative w-[130px] bg-[#007aff26] rounded-lg overflow-hidden">
                          <div
                            className="h-[130px] rounded-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        </div>

                        <CardContent className="p-0 flex flex-col items-start justify-between gap-4 flex-1 min-h-[130px]">
                          <div className="flex flex-col gap-2 w-full">
                            <h4 className="font-m3-label-large-emphasized text-black">
                              {item.title}
                            </h4>
                            <p className="font-body-small text-[#090909]">
                              {item.content}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2 w-full">
                            {item.tags && (
                              <div className="flex items-center gap-2">
                                {item.tags.map((tag, index) => (
                                  <Badge
                                    key={index}
                                    className={`p-1 rounded-full text-white font-chip-label ${
                                      tag === "Typography"
                                        ? "bg-[#7b1fa2]"
                                        : "bg-[#1565c0]"
                                    }`}
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center justify-between gap-2 w-full">
                              <p className="font-footnote-regular text-[#0000004c]">
                                Last edited {item.lastEdited}
                              </p>
                            </div>
                          </div>
                        </CardContent>

                        <Button variant="outline" className="h-10 self-start">
                          View
                        </Button>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="pinned" className="mt-6 pb-6">
                  <div className="flex flex-col gap-6">
                    {pinnedItems.map((item) => (
                      <Card
                        key={item.id}
                        className="p-4 border border-[#e5e5ea] flex items-start gap-4"
                      >
                        <div className="relative w-[130px] bg-[#007aff26] rounded-lg overflow-hidden">
                          <div
                            className="h-[130px] rounded-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        </div>

                        <CardContent className="p-0 flex flex-col items-start justify-between gap-4 flex-1 min-h-[130px]">
                          <div className="flex flex-col gap-2 w-full">
                            <h4 className="font-m3-label-large-emphasized text-black">
                              {item.title}
                            </h4>
                            <p className="font-body-small text-[#090909]">
                              {item.content}
                            </p>
                          </div>

                          <div className="flex flex-col gap-2 w-full">
                            {item.tags && (
                              <div className="flex items-center gap-2">
                                {item.tags.map((tag, index) => (
                                  <Badge
                                    key={index}
                                    className={`p-1 rounded-full text-white font-chip-label ${
                                      tag === "Typography"
                                        ? "bg-[#7b1fa2]"
                                        : "bg-[#1565c0]"
                                    }`}
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center justify-between gap-2 w-full">
                              <p className="font-footnote-regular text-[#0000004c]">
                                Last edited {item.lastEdited}
                              </p>
                            </div>
                          </div>
                        </CardContent>

                        <div className="flex flex-col items-end justify-between self-start h-[130px]">
                          <PinIcon className="w-6 h-6" />
                          <Button variant="outline" className="h-10">
                            View
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
