import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (DropButton) => {
  const DocumentedDropButton = describe(DropButton)
    .availableAt(getAvailableAtBadge('DropButton'))
    .description(
      `A Button that when clicked will a Drop with the specified 'dropContent'.
      When opened, the drop will control the focus so that the contents behind
      it are not focusable. All properties of Button can be passed through.
      `
    ).usage(
      `import { DropButton } from 'grommet';
<DropButton control={element}>{dropContents...}</DropButton>`
    );

  DocumentedDropButton.propTypes = {
    a11yTitle: PropTypes.string.description('Custom title to be used by screen readers.'),
    dropAlign: PropTypes.shape({
      top: PropTypes.oneOf(['top', 'bottom']),
      bottom: PropTypes.oneOf(['top', 'bottom']),
      right: PropTypes.oneOf(['left', 'right']),
      left: PropTypes.oneOf(['left', 'right']),
    }).description(
      'How to align the drop with respect to the button.'
    ).defaultValue({
      top: 'top',
      left: 'left',
    }),
    dropContent: PropTypes.element.description(
      'Content to put inside the Drop.'
    ).isRequired,
    onClose: PropTypes.func.description('Callback for when the drop is closed'),
    onOpen: PropTypes.func.description('Callback for when the drop is opened'),
    open: PropTypes.bool.description(
      `Whether the drop should be open or not. Setting this property does not
      influence user interaction after it has been rendered.`
    ),
  };

  return DocumentedDropButton;
};