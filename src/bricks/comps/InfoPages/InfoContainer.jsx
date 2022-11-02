import css from '../../../styles/card-view'

const InfoPagesContainer = css.InfoPagesContainer

export const InfoContainer = ({children}) => {
    return (
        <>
            <InfoPagesContainer>
                {children}
            </InfoPagesContainer>
        </>
    )
}