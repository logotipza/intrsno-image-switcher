const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaUploadCheck, PlainText, InspectorControls } = wp.editor;
const { PanelBody, Button } = wp.components;

registerBlockType('image-switcher-block/image-switcher', {
    title: 'Image Switcher',
    icon: 'format-image',
    category: 'common',
    attributes: {
        frontImageUrl: {
            type: 'string',
            default: ''
        },
        backImageUrl: {
            type: 'string',
            default: ''
        },
        linkUrl: {
            type: 'string',
            default: ''
        }
    },

    edit: ({ attributes, setAttributes }) => {
        const { frontImageUrl, backImageUrl, linkUrl } = attributes;

        const onFrontImageSelect = (media) => setAttributes({ frontImageUrl: media.url });
        const onBackImageSelect = (media) => setAttributes({ backImageUrl: media.url });

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Front Image">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFrontImageSelect}
                                allowedTypes={['image']}
                                value={frontImageUrl}
                                render={({ open }) => (
                                    <Button isPrimary onClick={open}>
                                        Select Front Image
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </PanelBody>
                    <PanelBody title="Back Image">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onBackImageSelect}
                                allowedTypes={['image']}
                                value={backImageUrl}
                                render={({ open }) => (
                                    <Button isPrimary onClick={open}>
                                        Select Back Image
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    </PanelBody>
                    </InspectorControls>
                <div className="image-switcher-block">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onFrontImageSelect}
                            allowedTypes={['image']}
                            value={frontImageUrl}
                            render={({ open }) => (
                                <img
                                    src={frontImageUrl || 'https://via.placeholder.com/150'}
                                    alt="Front Image"
                                    onClick={open}
                                    style={{ cursor: 'pointer', width: '100%', objectFit: 'cover' }}
                                />
                            )}
                        />
                    </MediaUploadCheck>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onBackImageSelect}
                            allowedTypes={['image']}
                            value={backImageUrl}
                            render={({ open }) => (
                                <img
                                    src={backImageUrl || 'https://via.placeholder.com/150'}
                                    alt="Back Image"
                                    onClick={open}
                                    style={{ cursor: 'pointer', width: '100%', objectFit: 'cover' }}
                                />
                            )}
                        />
                    </MediaUploadCheck>
                    <PlainText
                        value={linkUrl}
                        onChange={(value) => setAttributes({ linkUrl: value })}
                        placeholder="Enter URL for the back image..."
                        style={{ width: '100%', marginTop: '10px' }}
                    />
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { frontImageUrl, backImageUrl, linkUrl } = attributes;

        return (
            <div className="image-switcher-block">
                <img className="front" src={frontImageUrl} alt="Front Image" />
                <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                    <img className="back" src={backImageUrl} alt="Back Image" />
                </a>
            </div>
        );
    },
});
