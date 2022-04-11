import {
  Image,
  Link,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bgColor="gray.800">
        <Image
          objectFit="contain"
          maxW="900px"
          maxH="600px"
          src={imgUrl}
          alt="image"
        />
        <ModalFooter
          bgColor="gray.800"
          borderBottomLeftRadius={4}
          borderBottomRightRadius={4}
          px="4"
          py="2"
        >
          <Link
            href={imgUrl}
            isExternal
            size="0.5"
            mr="auto"
            mt="1"
            fontSize={14}
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
