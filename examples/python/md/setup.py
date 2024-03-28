from setuptools import setup

setup(
    name='cubexch-client-md-utils',
    version='0.0.1',
    description='cubexch client market data utils',
    author='cubexch',
    install_requires=[
        'cubexch-client',
    ],
    package_data={
        'cube_ws_api_md': ['py.typed'],
    },
)
