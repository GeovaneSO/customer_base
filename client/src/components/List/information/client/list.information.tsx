import { AnimatePresence } from 'framer-motion';
import { MdAddIcCall, MdOutlineAutoDelete } from 'react-icons/md';
import { ClientContext } from '../../../../contexts';
import { InformationContext } from '../../../../contexts/information/information.context';
import { ButtonAdd } from '../../../Button';
import { ContainerList, Container, ContainerListInformation, BoxTitle } from '../style';
import { motion } from 'framer-motion';

const ListInformation = () => {
    const { informationByClient, openModalInformation, setOpenModalInformation, client } = ClientContext()
    const { createInformationModal, setCreateInformationModal, getInformationById } = InformationContext()

    return (
        <AnimatePresence>
            {openModalInformation &&
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    
                    onClick={() => setOpenModalInformation(!openModalInformation)}
                >
                    <ContainerListInformation
                        initial={{scale: 0.5}}
                        animate={{
                            scale: 1,
                            transition: { 
                                type: "spring", 
                                stiffness: 30
                            }
                        }}
                        exit={{scale: 0.5,
                            transition: { 
                                type: "spring", 
                                stiffness: 30
                            }
                        }}

                        onClick={(e) =>  e.stopPropagation()}
                    >

                        <BoxTitle>
                            <h3>Informações de {client.username}</h3>

                            <div className='box_btsn'>
                                <ButtonAdd
                                    onClick={() => {
                                        setCreateInformationModal(!createInformationModal)                            
                                        setOpenModalInformation(!openModalInformation) 
                                    }}
                                >
                                    <MdAddIcCall className="svg" />
                                </ButtonAdd>

                                <ButtonAdd
                                    onClick={() => setOpenModalInformation(!openModalInformation)}
                                >
                                    X
                                </ButtonAdd>
                            </div>
                        </BoxTitle>
                        <ContainerList>
                            {
                                informationByClient.length > 0 ?
                                    informationByClient.map((information) =>
                                        <motion.li
                                            className="card"
                                            key={information.id}
                                            initial={{x: 200}}
                                            animate={{x: 0,
                                                transition: { 
                                                    type: "spring", 
                                                    stiffness: 30
                                                }
                                            }}
                                        >

                                            <div className='box_information'>
                                                <p>E-mail: {information.email}</p>
                                                <p>Telefone: {information.phone}</p>
                                            </div>

                                            <ButtonAdd
                                                onClick={() => {
                                                    getInformationById(information.id)
                                                }}
                                            >
                                                <MdOutlineAutoDelete />
                                            </ButtonAdd>
                                        </motion.li>

                                    ) :
                                    <div>
                                        <span>
                                            Adicione uma informação para contato!
                                        </span>
                                    </div>
                            }
                        </ContainerList>
                    </ContainerListInformation>
                </Container >
            }
        </AnimatePresence>
    );
};

export { ListInformation };
