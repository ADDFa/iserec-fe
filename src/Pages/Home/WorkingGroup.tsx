import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Divider, List } from "antd"

const WorkingGroup = () => {
    const { t } = useTranslation()

    const workingGroups = ["1", "2", "3", "4", "5", "6"]

    return (
        <section id="working-group" className="py-5 bg-cornsilk">
            <Container>
                <h3 className="roboto-black text-center">
                    {t("working-group")}
                </h3>

                <p className="text-justify mt-3">{t("working-group-desc")}</p>

                <Divider>{t("working-group-intro")}</Divider>
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                    <List
                        size="large"
                        bordered
                        dataSource={workingGroups}
                        renderItem={(item) => (
                            <List.Item>{t(`working-group-${item}`)}</List.Item>
                        )}
                    />
                </div>
            </Container>
        </section>
    )
}

export default WorkingGroup
