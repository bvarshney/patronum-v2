import BecomePartnerForm from "@/components/Forms/BecomePartnerForm";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";

export default function PartnersDetail() {

    return (
        <>
            <PageLayout
                pageTitle1="Become"
                pageTitle2="A Partner"
                pagePara="Join forces with Patronum! Let’s redefine efficiency and productivity together!"
                imgSrc="partner-with-us.svg"
                title={"Become A Partner - Patronum"}
                description={"Patronum provides a better way to Google Workspace (GSuite) Management. Patronum fully automates all the administrator and user tasks to ensure an efficient, effective and secure process."}
                url={"become-a-partner"}
                img={"homepage.jpg"}
                date_published={"2023-05-13T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Patronum, Google Workspace Manager, G-Suite Manager"}
            >

                <section id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="lg:flex items-start justify-between">
                                <SectionTitle
                                    sectionTitle1="Become A"
                                    sectionTitle2="Patronum Partner"
                                    sectionPara="As a Patronum partner, we’ll provide you with sales, marketing, and support assistance that can help you win new clients and generate recurring revenue for years to come. Get in touch with us to get started."
                                />

                                <div className="lg:w-[50%] w-full h-full">
                                    <div className="bg-[#FDFDFD] rounded-[15px] px-[11%] py-[7.6%] border-[#E2E2E2] border fadeUp">
                                        <BecomePartnerForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </PageLayout>
        </>
    )
}