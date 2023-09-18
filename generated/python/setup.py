from setuptools import setup

setup(
    name='cubexch-client',
    version='0.1.0',
    description='cubexch client',
    author='cubexch',
    install_requires=[
        'protobuf',
    ],
    package_data={
        'cube_ws_api': ['py.typed'],
    },
)
